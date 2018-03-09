export class Club {
  id: number
  name: string
  city: string
  color: number
  isTopFour: boolean
  nextMatchDate: string

  constructor(config?: any) {
    if (config) {
      Object.assign(this, config)
    }
  }
}