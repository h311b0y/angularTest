export class Color {
    name: string
    hex: string
    id: number

    constructor(config?: any) {
        if (config) {
          Object.assign(this, config)
        }
      }
}