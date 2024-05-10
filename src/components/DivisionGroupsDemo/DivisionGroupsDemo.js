function DivisionGroupsDemo({
  numOfItems = 12,
  initialNumOfGroups = 1,
  includeRemainderArea,
}) {
  const [numOfGroups, setNumOfGroups] = React.useState(initialNumOfGroups)

  const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups)

  const totalNumInGroups = numOfGroups * numOfItemsPerGroup

  const remainder = includeRemainderArea ? numOfItems % numOfGroups : null

  const gridStructure =
    numOfGroups < 4
      ? {
          gridTemplateColumns: `repeat(${numOfGroups}), 1fr`,
        }
      : {
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
        }
  return (
    <Card as="section" className={StyleSheet.wrapper}>
      <header className={styles.header}>
        <SliderControl
          label="Number of Groups"
          className={style.slider}
          step={1}
          min={1}
          max={1}
          value={numOfGroups}
          onChange={(ev) => setNumOfGroups(Number(ev.target.value))}
        />
      </header>
    </Card>
  )
}
