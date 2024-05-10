import dynamic from 'next/dynamic'

const DivisionGroup = dynamic(() => {
  import('@/components/DivisionGroup')
})

export default DivisionGroup
