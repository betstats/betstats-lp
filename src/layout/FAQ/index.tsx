'use client';

import { Button } from '@/components/Button';
import questions from './questions.json';
import Accordion from '@/components/Accordion';

export const FAQ = () => {
  return (
    <section className="mx-auto max-w-[1140px] w-full flex flex-col gap-4 md:mt-[132px]  md:gap-[76px] px-6">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Button withoutAction className="w-fit px-4 py-2" scheme="outlined">
          <span className="text-xs md:text-lg font-light ">DÚVIDAS FREQUENTES</span>
        </Button>
        <div className="w-full flex flex-col md:flex-row justify-between items-start lg:items-end gap-4">
          <h2 className="max-w-[439px] font-rubik font-semibold text-4xl text-center md:text-5xl md:text-start">
            Tem dúvidas? <b className="gradient-text font-semibold">Confira nosso FAQ</b>
          </h2>
          <p className="hidden md:block text-[22px] leading-7 max-w-[304px]">
            Ainda está com dúvidas?{' '}
            <b className="gradient-text font-bold">Entre em contato conosco</b>
          </p>
        </div>
      </div>
      <article className="w-full flex flex-col gap-[14px]">
        {questions.map((question) => (
          <Accordion.Root key={question.title} type="single" collapsible>
            <Accordion.Item value={question.title}>
              <Accordion.Trigger>
                <h3 className="text-xs md:text-2xl text-start">{question.title}</h3>
              </Accordion.Trigger>
              <Accordion.Content>
                <p className="text-xs md:text-base">{question.content}</p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        ))}
      </article>
      <p className="block md:hidden text-xs w-full text-center mt-[10px]">
        Ainda está com dúvidas? <b className="gradient-text font-bold">Entre em contato conosco</b>
      </p>
    </section>
  );
};
