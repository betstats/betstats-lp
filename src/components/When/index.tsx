type Props = {
  conditional: boolean | string | number | undefined;
  trueRender: JSX.Element;
  falseRender?: JSX.Element;
};

const When = ({ conditional, falseRender = <></>, trueRender }: Props) =>
  conditional && trueRender ? trueRender : falseRender;

export default When;
