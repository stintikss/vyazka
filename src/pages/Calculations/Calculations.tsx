import React, { useState } from 'react';
import { Card, Select, Button, Form, Typography, Divider, Row, Col, Alert } from 'antd';
import { CalculatorOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title, Text } = Typography;

// Таблица размеров по возрасту и росту (примерные значения)
const sizeChart = {
    sweater: {
        '0-3': { height: '62-68', backLength: 20, chestWidth: 22, sleeveLength: 18 },
        '3-6': { height: '68-74', backLength: 22, chestWidth: 24, sleeveLength: 20 },
        '6-9': { height: '74-80', backLength: 24, chestWidth: 26, sleeveLength: 22 },
        '9-12': { height: '80-86', backLength: 26, chestWidth: 28, sleeveLength: 24 },
        '12-18': { height: '86-92', backLength: 28, chestWidth: 30, sleeveLength: 26 },
        '18-24': { height: '92-98', backLength: 30, chestWidth: 32, sleeveLength: 28 },
    },
    pants: {
        '0-3': { height: '62-68', length: 32, waist: 44 },
        '3-6': { height: '68-74', length: 36, waist: 46 },
        '6-9': { height: '74-80', length: 40, waist: 48 },
        '9-12': { height: '80-86', length: 44, waist: 50 },
        '12-18': { height: '86-92', length: 48, waist: 52 },
        '18-24': { height: '92-98', length: 52, waist: 54 },
    },
    booties: {
        '0-3': { length: 9 },
        '3-6': { length: 10 },
        '6-9': { length: 11 },
        '9-12': { length: 12 },
        '12-18': { length: 13 },
        '18-24': { length: 14 },
    }
};

const ageOptions = [
    { value: '0-3', label: '0-3 месяца' },
    { value: '3-6', label: '3-6 месяцев' },
    { value: '6-9', label: '6-9 месяцев' },
    { value: '9-12', label: '9-12 месяцев' },
    { value: '12-18', label: '1-1.5 года' },
    { value: '18-24', label: '1.5-2 года' },
];

const Calculations: React.FC = () => {
    const [form] = Form.useForm();
    const [result, setResult] = useState<any>(null);

    const onFinish = (values: any) => {
        const { itemType, age } = values;

        const itemSizes = sizeChart[itemType as keyof typeof sizeChart];
        const sizeData = itemSizes[age as keyof typeof itemSizes];

        if (sizeData) {
            setResult({
                ...sizeData,
                ageRange: age,
                itemType
            });
        }
    };

    const renderResult = () => {
        if (!result) return null;

        return (
            <Card title="Результаты расчета" style={{ marginTop: 20 }}>
                <Text strong>Возраст: </Text>
                <Text>{ageOptions.find(opt => opt.value === result.ageRange)?.label}</Text>
                <br />

                <Text strong>Рост: </Text>
                <Text>{result.height} см</Text>
                <br />

                {result.itemType === 'sweater' && (
                    <>
                        <Text strong>Длина спинки: </Text>
                        <Text>{result.backLength} см</Text>
                        <br />

                        <Text strong>Ширина груди: </Text>
                        <Text>{result.chestWidth} см</Text>
                        <br />

                        <Text strong>Длина рукава: </Text>
                        <Text>{result.sleeveLength} см</Text>
                    </>
                )}

                {result.itemType === 'pants' && (
                    <>
                        <Text strong>Длина штанов: </Text>
                        <Text>{result.length} см</Text>
                        <br />

                        <Text strong>Обхват талии: </Text>
                        <Text>{result.waist} см</Text>
                    </>
                )}

                {result.itemType === 'booties' && (
                    <>
                        <Text strong>Длина пинеток: </Text>
                        <Text>{result.length} см</Text>
                    </>
                )}

                <Divider />
                <Alert
                    message="Примечание"
                    description="Размеры являются ориентировочными. Для точных измерений рекомендуется снять мерки с ребенка."
                    type="info"
                    showIcon
                />
            </Card>
        );
    };

    return (
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
            <Title level={2} style={{ textAlign: 'center' }}>
                <CalculatorOutlined /> Калькулятор размеров детской одежды
            </Title>

            <Card>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{ itemType: 'sweater', age: '6-9' }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="itemType"
                                label="Тип изделия"
                                rules={[{ required: true, message: 'Выберите тип изделия' }]}
                            >
                                <Select>
                                    <Option value="sweater">Кофта</Option>
                                    <Option value="pants">Штаны</Option>
                                    <Option value="booties">Пинетки</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="age"
                                label="Возраст ребенка"
                                rules={[{ required: true, message: 'Выберите возраст' }]}
                            >
                                <Select>
                                    {ageOptions.map(option => (
                                        <Option key={option.value} value={option.value}>
                                            {option.label}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Рассчитать размеры
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            {renderResult()}

            <Divider />

            <Text type="secondary">
                * Данные расчета основаны на стандартных размерных таблицах для детской одежды.
                Все значения указаны в сантиметрах.
            </Text>
        </div>
    );
};

export default Calculations;