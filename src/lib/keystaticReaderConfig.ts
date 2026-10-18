import keystaticConfig from '../../keystatic.config'

const keystaticReaderConfig = {
  ...keystaticConfig,
  storage: {
    kind: 'local' as const,
  },
}

export default keystaticReaderConfig