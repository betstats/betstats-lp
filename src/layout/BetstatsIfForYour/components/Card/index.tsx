type Props = {
  icon: JSX.Element;
  title: string;
  body: string;
};

export const Card = ({ body, icon, title }: Props) => {
  const splitedBody = body.split('-n');

  return (
    <article className="px-8 py-[30px] rounded-md flex flex-col items-start w-full bg-text-secondary min-h-[377px]">
      <div className="bg-green-gradient rounded-md flex items-center justify-center w-12 h-12">
        {icon}
      </div>
      <div className="w-full h-[1px] bg-common-white-300 my-4" />
      <h3 className="gradient-text font-bold text-[22px] leading-[33px]">{title}</h3>
      {splitedBody.map((item) => (
        <p key={item} className="text-common-black-800 mt-[21px]">
          {item}
        </p>
      ))}
    </article>
  );
};
