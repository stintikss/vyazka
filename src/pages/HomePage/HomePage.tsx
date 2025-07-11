import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowButtonDefault } from '../../shared/SVG/ImageSVG/Image';
import { useNavigate } from 'react-router-dom';
import { mainBlockHomeVariants } from '../../shared/animations/Animations';
import { useRef } from 'react';


const features = [
    'Узнать подходящий размер одежды по возрасту или росту ребёнка',
    'Рекомендации по размерам для кофты, штанов, пинеток и других изделий',
    'Быстрый расчёт параметров вязания: длина рукава, спинки, переда, ширина изделия и т.д.',
    'Ввод возраста или роста ребёнка — готовые размеры для вязания',
    'Удобный калькулятор для разных видов изделий',
];

const advantages = [
    'Быстро и удобно',
    'Понятный интерфейс',
    'Актуальные рекомендации',
    'Бесплатно',
];

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const buttonRef = useRef(null);
    const isInView = useInView(buttonRef, { once: true, amount: 0.9 });

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-[#171964] via-[#23236e] to-[#2e2e7e] flex flex-col"
            variants={mainBlockHomeVariants}
            initial='hidden'
            animate='visible'
        >
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
                <div className="max-w-2xl w-full text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Калькулятор для вязания</h1>
                    <p className="text-lg md:text-xl text-[#e0e0fa] mb-2">Добро пожаловать!</p>
                    <p className="text-base md:text-lg text-[#bdbdf7]">Сайт для расчёта параметров вязания — быстро, удобно, бесплатно.</p>
                </div>
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center transition hover:scale-[1.03] hover:shadow-2xl duration-200">
                        <h2 className="text-xl font-semibold text-white mb-4">Возможности</h2>
                        <ul className="space-y-3 text-[#e0e0fa] text-base text-left w-full max-w-xs mx-auto">
                            {features.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-[#7b7bfa] flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center transition hover:scale-[1.03] hover:shadow-2xl duration-200">
                        <h2 className="text-xl font-semibold text-white mb-4">Преимущества</h2>
                        <ul className="space-y-3 text-[#e0e0fa] text-base text-left w-full max-w-xs mx-auto">
                            {advantages.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-[#f7b07b] flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='mt-10 w-full flex justify-center'>
                    <motion.button
                        ref={buttonRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1.5, // 1 секунда для основной анимации
                                ease: 'easeInOut' // Плавная кривая bezier
                            }
                        } : { opacity: 0, y: 20 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 15px rgba(140, 94, 204, 0.7)",
                            transition: {
                                duration: 1 // 1 секунда для hover-анимации
                            }
                        }}
                        whileTap={{
                            scale: 0.98,
                            transition: {
                                duration: 1 // 1 секунда для tap-анимации
                            }
                        }}
                        className='bg-[#6c7bba] px-8 py-3 rounded-full flex items-center justify-center gap-3 text-white cursor-pointer shadow-lg text-lg font-medium'
                        onClick={() => navigate('/calculation')}
                    >
                        Попробовать
                        <motion.span
                            animate={isInView ? {
                                x: [0, 5, 0],
                                transition: {
                                    delay: 0.5,
                                    repeat: Infinity,
                                    duration: 1.5 // Чуть дольше для плавности
                                }
                            } : {}}
                        >
                            <ArrowButtonDefault color='#ffffff' />
                        </motion.span>
                    </motion.button>
                </div>
            </main>
        </motion.div>
    );
};

export default HomePage;