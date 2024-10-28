import { PropsWithChildren } from 'react';
import * as S from './styles';

export const CloseButton = ({
    children,
    ...props
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => (
    <S.ButtonContainer {...props}>{children}</S.ButtonContainer>
);
