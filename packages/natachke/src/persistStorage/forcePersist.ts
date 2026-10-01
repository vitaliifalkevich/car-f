const forcePersist = () => {
  //@ts-ignore
  window?.persistor?.persist?.()
}

export default forcePersist
