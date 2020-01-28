import styled from 'styled-components'

import { Layout } from 'antd'

const {Content, Sider } = Layout

const AntLayout = styled(Layout)`
  height: 100vh;
  max-width: 1440px;
  min-width: 320px;
  background-color: #fff;
  margin: 0 auto;
`;

AntLayout.Content = styled(Content)`
  max-width: 60%;
  background-size: cover;
`
AntLayout.Sider = styled(Sider)`
.ant-layout-sider-children {
  display: flex;
  align-items: center;
  justify-content: center;
}
  background-color: white;
`

export {
  AntLayout
}
