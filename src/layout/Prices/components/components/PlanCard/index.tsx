type Props = {
  title: string;
  description: string;
  value: string;
  fullValue: string;
  period: string;
};

export const PlanCard = ({ description, fullValue, period, title, value }: Props) => {
  return (
    <article className="px-8 py-[30px] rounded-md flex flex-col justify-center items-center w-full bg-text-secondary min-h-[377px] text-bg-secondary">
      <h3 className="gradient-text font-bold text-3xl md:text-4xl">{title}</h3>
      <div className="w-full h-[1px] bg-common-white-300 my-4" />
      <p className="text-lg text-center">{description}</p>
      <div className="flex flex-col items-center mt-8 gap-2">
        <span className="line-through text-alerts-red text-xl">{fullValue}</span>
        <span className="text-5xl font-bold gradient-text">{value}</span>
        <span>{period}</span>
      </div>
    </article>
  );
};
