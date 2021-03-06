import styled from 'styled-components'

export const SpinnerBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  line-height: 1.15;
  background-color: #fff;
  z-index: -1;
`

export const SpinnerIcon = styled.div`
  @-webkit-keyframes spinner-anime {
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
  @keyframes spinner-anime {
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-2.125 -1.875 64 64'%3E%3Cpath fill='%23CCC' d='M29.875-1.875c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 60.7c-15.85 0-28.7-12.85-28.7-28.7s12.85-28.7 28.7-28.7 28.7 12.85 28.7 28.7-12.85 28.7-28.7 28.7z'/%3E%3Cpath fill='%23108ee9' d='M61.858 30.34c.003-.102.008-.203.008-.305 0-11.43-5.996-21.452-15.01-27.113l-.013.026a1.629 1.629 0 0 0-.81-.22 1.646 1.646 0 1 0-.713 3.132c7.963 5.1 13.247 14.017 13.247 24.176 0 .147-.01.293-.01.44h.022c0 .01-.004.02-.004.03 0 .91.74 1.65 1.65 1.65s1.65-.74 1.65-1.65c0-.06-.012-.112-.018-.167z'/%3E%3C/svg%3E");
  background-position: 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  -webkit-animation: spinner-anime 1s linear infinite;
  animation: spinner-anime 1s linear infinite;
`

export const SpinnerText = styled.div`
  color: ${props => props.theme['@color-text-caption']};
  font-size: 14px;
  margin-top: 10px;
`
