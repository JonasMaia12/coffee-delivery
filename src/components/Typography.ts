import styled from "styled-components"

interface TitleTextProps {
  size?: "xl" | "l" | "m" | "s" | "xs"
  color?: "title" | "subtitle" | "text"
  weight?: number | string
}

interface RegularTextProps {
  size?: "l" | "m" | "s"
  color?: "title" | "subtitle" | "label"
  weight?: number | string
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-${size ?? "m"}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 1.3;
  font-weight: ${({ weight }) => weight ?? 800};
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "text"}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`text-${size ?? "m"}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 1.3;
  font-weight: ${({ weight }) => weight ?? 400};
`
