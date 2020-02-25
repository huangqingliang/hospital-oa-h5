import React, { useReducer } from 'react'
import { fromJS } from 'immutable'
import Sign from './sign/index'
import Related from './related/index'
import TabBarBox from '../../components/tabBarBox'
import { normalImage } from '../../utils/config'

function reducer(
  state: {
    set: (key: string, value: any) => any
  },
  action: { type: string; value: any },
) {
  switch (action.type) {
    case 'changeValue':
      return state.set('value', action.value)
    default:
      return state
  }
}

function Home() {
  const [data] = useReducer(
    reducer,
    fromJS({
      // 默认选中
      normalSelect: '公文签收',
      // 底部tabBar数据
      tabBarData: [
        {
          components: <Sign />,
          title: '公文签收',
          icon:
            'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
          selectedIcon:
            'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        },
        {
          title: '',
          icon:
            'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
        },
        {
          components: <Related />,
          title: '与我相关',
          icon:
            'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
          selectedIcon:
            'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        },
      ],
      // 底部动作面板数据
      newlyOpenedData: [
        {
          route: '',
          icon: normalImage,
          text: '公文拟发',
        },
        {
          route: '',
          icon: normalImage,
          text: '公文发文',
        },
      ],
    }),
  )

  const { normalSelect, tabBarData, newlyOpenedData } = data.toJS()

  return (
    <TabBarBox
      selected={normalSelect}
      tabBar={tabBarData}
      actionSheet={newlyOpenedData}
    />
  )
}

export default Home