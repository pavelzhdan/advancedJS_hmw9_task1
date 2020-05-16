/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
export default class Character {
  constructor() {
    this.damage = 100;
    this._damage = this.damage;
    this._damageStoned = this.damage;
  }

  set attack(reach) {
    if (reach > 5) {
      reach = 5;
    }
    this._damage = this.damage;
    this._damage *= 1 - ((reach - 1) / 10);
  }

  get attack() {
    return this._damage;
  }

  set stoned(reach) {
    if (reach > 5) {
      reach = 5;
    }
    this.attack = reach;
    this._damageStoned = this.damage;
    this._damageStoned = this._damage - Math.floor(Math.log2(reach)) * 5;
  }

  get stoned() {
    return this._damageStoned;
  }
}

export class Magician extends Character {

}

export class Daemon extends Character {

}
