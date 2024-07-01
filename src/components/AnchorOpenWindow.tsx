import { FC } from 'react';
import { DefaultButtonProps } from './DefaultButton';

export const AnchorOpenWindow: FC<
  DefaultButtonProps
  & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({
  text,
  onClick,
  ...rest
}) => {
    const { href } = rest

    return <a
      onClick={(e) => {
        e.preventDefault();
        window.open(href, '_blank', 'width=400, height=690');
      }}
      {...rest}
    >
      {text}
    </a>;
  }
