"use client";

import type { NextPage } from 'next';
import Head from 'next/head';
// ATUALIZADO: Importado o tipo 'Variants' para a tipagem explícita.
import { motion, Variants } from 'framer-motion';
import { Paintbrush, Shirt, Music, SquareRadical } from 'lucide-react';

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

// ATUALIZADO: Adicionada a tipagem explícita ': Variants' para corrigir o erro de build.
const fadeInAnimation: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>DISGRAMA</title>
        <meta name="description" content="DISGRAMA - Design, Moda, Música e Arte Radical." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans bg-zinc-900 text-zinc-50 antialiased overflow-x-hidden">

        <section className="relative flex h-screen w-full flex-col items-center justify-center">
          <div className="absolute inset-0 z-0 bg-zinc-900" />
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display relative text-6xl font-bold tracking-tighter text-zinc-950 sm:text-8xl lg:text-9xl">

              <motion.div
                className="absolute left-1/2 top-1/2 z-10"
                style={{ width: 'clamp(48rem, 120vw, 152rem)', height: 'clamp(48rem, 120vw, 152rem)', x: '-50%', y: '-50%' }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 15
                }}
              >
                <StarIcon className="h-full w-full text-red-500 opacity-75" />
              </motion.div>

              <span className="relative z-20">DISGRAMA™</span>
            </h1>
            <p className="font-sans relative z-20 mt-4 text-lg uppercase tracking-widest text-zinc-50 md:text-xl">
              A Estética da Insurreição
            </p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 animate-pulse text-sm uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a href="#manifesto">Role para explorar</a>
          </motion.div>
        </section>

        <section id="manifesto" className="relative w-full bg-white py-20 text-black md:py-24 lg:py-32 overflow-hidden">
          <motion.div
            className="relative z-20 mx-auto max-w-4xl px-6 text-center"
            initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}
          >
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">O QUE É DISGRAMA?</h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-red-500"></div>
            <p className="font-sans mt-8 text-left text-lg leading-relaxed md:text-xl md:leading-9">
              Disgrama é a negação do conformismo. Somos um coletivo, um laboratório de expressão que ocupa as fronteiras entre o design, a moda, a música e a arte. Nascemos da urgência de criar, de politizar a estética e de usar a criatividade como ferramenta de questionamento radical. Exploramos o experimentalismo não como um estilo, mas como um método para desconstruir o presente e imaginar novos futuros.
            </p>
          </motion.div>
        </section>

        <section id="pilares" className="w-full bg-zinc-900 py-20 md:py-24 lg:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <motion.h2
              className="font-display text-center text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl"
              initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}
            >
              NOSSOS TERRITÓRIOS
            </motion.h2>
            <motion.div
              className="mx-auto mt-6 h-1 w-24 bg-red-500"
              initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}
            ></motion.div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

              <motion.div className="border border-neutral-800 bg-neutral-950 p-8 transition-colors duration-300 hover:bg-neutral-900" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}>
                <Paintbrush className="h-10 w-10 text-red-500" />
                <h3 className="font-display mt-4 text-2xl font-bold">DESIGN</h3>
                <p className="font-sans mt-2 text-neutral-400">
                  Subvertemos a função e a forma. Criamos interfaces, objetos e sistemas que desafiam o usuário e criticam o status quo.
                </p>
              </motion.div>

              <motion.div className="border border-neutral-800 bg-neutral-950 p-8 transition-colors duration-300 hover:bg-neutral-900" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}>
                <Shirt className="h-10 w-10 text-red-500" />
                <h3 className="font-display mt-4 text-2xl font-bold">MODA</h3>
                <p className="font-sans mt-2 text-neutral-400">
                  O corpo como tela política. Nossas vestimentas são manifestos ambulantes, uma afronta à indústria e suas tendências efêmeras.
                </p>
              </motion.div>

              <motion.div className="border border-neutral-800 bg-neutral-950 p-8 transition-colors duration-300 hover:bg-neutral-900" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}>
                <Music className="h-10 w-10 text-red-500" />
                <h3 className="font-display mt-4 text-2xl font-bold">MÚSICA</h3>
                <p className="font-sans mt-2 text-neutral-400">
                  Ruído, dissonância e experimentação sônica. Produzimos a trilha sonora da desordem, explorando desde o industrial ao eletrônico abstrato.
                </p>
              </motion.div>

              <motion.div className="border border-neutral-800 bg-neutral-950 p-8 transition-colors duration-300 hover:bg-neutral-900" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}>
                <SquareRadical className="h-10 w-10 text-red-500" />
                <h3 className="font-display mt-4 text-2xl font-bold">ARTE RADICAL</h3>
                <p className="font-sans mt-2 text-neutral-400">
                  Performance, instalações e arte digital que confrontam, provocam e inspiram a ação. A arte não é para decorar, é para perturbar.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="galeria" className="w-full bg-white py-20 text-black md:py-24 lg:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
             <motion.h2 className="font-display text-center text-4xl font-bold tracking-tight md:text-5xl" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}>
              FRAGMENTOS VISUAIS
            </motion.h2>
            <motion.div className="mx-auto mt-6 h-1 w-24 bg-red-500" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}></motion.div>
            <motion.div className="mt-16 columns-2 gap-4 sm:columns-3 [&>div:not(:first-child)]:mt-4" initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={fadeInAnimation}>
              <div className="h-80 w-full bg-neutral-300"></div>
              <div className="h-56 w-full bg-neutral-700"></div>
              <div className="h-96 w-full bg-red-500"></div>
              <div className="h-64 w-full bg-neutral-800"></div>
              <div className="h-80 w-full bg-neutral-200"></div>
              <div className="h-56 w-full bg-zinc-900"></div>
              <div className="h-96 w-full bg-neutral-400"></div>
            </motion.div>
          </div>
        </section>

        <section id="contato" className="w-full bg-red-500 py-20 text-zinc-50 md:py-24">
          <motion.div
            className="mx-auto max-w-4xl px-6 text-center"
            initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} variants={fadeInAnimation}
          >
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">FAÇA PARTE DO MOVIMENTO.</h2>
            <p className="font-sans mt-4 max-w-2xl mx-auto text-lg text-red-100">
              Receba nossas publicações, convites para eventos e materiais exclusivos. Sem spam, apenas substância.
            </p>
            <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <input type="email" placeholder="seu.email@provedor.com" className="font-sans w-full max-w-xs rounded-md border-2 border-transparent bg-red-400 px-4 py-3 text-zinc-50 placeholder-red-200 focus:border-white focus:bg-red-600 focus:outline-none" />
              <button type="submit" className="font-display w-full rounded-md bg-zinc-900 px-8 py-3 font-bold text-zinc-50 transition-transform duration-200 hover:scale-105 sm:w-auto">
                INSCREVER-SE
              </button>
            </form>
          </motion.div>
        </section>

        <footer className="w-full bg-zinc-900 py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 text-center text-neutral-500 sm:flex-row">
                <p className="font-sans text-sm">
                  © 2025 DISGRAMA. A PROPRIEDADE É ROUBO.
                </p>
                <div className="font-sans mt-4 flex space-x-6 sm:mt-0">
                    <a href="#manifesto" className="hover:text-red-500">Manifesto</a>
                    <a href="#pilares" className="hover:text-red-500">Territórios</a>
                    <a href="#contato" className="hover:text-red-500">Contato</a>
                </div>
            </div>
        </footer>
      </main>
    </>
  );
};

export default Page;