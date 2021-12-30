const data = {
  // 模拟的antd的树结构数据，以ID作为唯一指定值
  key: '1',
  iscId: 'asascascasc',
  children: [
    {
      key: '1.1',
      iscId: 'asvasvgasf',
      children: [
        {
          key: '1.1.1',
          iscId: '8888',
          children: [],
        },
        {
          key: '1.1.2',
          iscId: '341243',
          children: [
            {
              key: '1.1.2.1',
              iscId: 'sdarqafascavf',
              children: [],
            },
          ],
        },
      ],
    },
    {
      key: '1.2',
      iscId: 'vassfafdasfcac',
      children: [],
    },
    {
      key: '1.3',
      iscId: 'cavcasfra',
      children: [],
    },
    {
      key: '1.4',
      iscId: 'casfraracdacs',
      children: [
        {
          key: '1.1.2',
          iscId: '3412431',
          children: [
            {
              key: '1.1.2.1',
              iscId: 'sdarqafascavf1',
              children: [],
            },
          ],
        },
        {
          key: '1.1.2',
          iscId: '3412432',
          children: [
            {
              key: '1.1.2.1',
              iscId: 'sdarqafascavf2',
              children: [],
            },
          ],
        },
        {
          key: '1.1.2',
          iscId: '3412433',
          children: [
            {
              key: '1.1.2.1',
              iscId: 'sdarqafascavf3',
              children: [],
            },
          ],
        },
      ],
    },
  ],
}

const getPosByIdInTree = (tree, iscId) => {
  const tmp = [] // 路径数组
  if (tree.iscId === iscId) {
    return [0]
  } //根节点

  const FindPos = (sourceTree, sourceId) => {
    if (!sourceTree.children) {
      return // 为末端节点
    }
    sourceTree.children.forEach((item, index) => {
      if (item.iscId === sourceId) {
        // 寻找到指定的元素节点
        tmp.push(index)
        FindPos(tree, sourceTree.iscId) // 继续寻找上层元素的位置
      } else {
        // 当前继续寻找别的子项
        FindPos(item, sourceId)
      }
    })
  }

  FindPos(tree, iscId)
  // return tmp
  // 这里会有一些特定的问题,这个路径是反序存储的，所以需要存进去之后反转一次
  // 另外看自己的需求，这个是否需要push(0)作为根节点的判定
  return tmp.reverse()
}

const source = 'sdarqafascavf2'
const pos = getPosByIdInTree(data, source)
console.log(pos) // [3, 2, 0] 不算根节点，测试通过
