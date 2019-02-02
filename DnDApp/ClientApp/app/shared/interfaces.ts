import { Character } from "../character/character";

export interface ICharacter {
  id: number;
  name: string;
  race: string;
  
}

export interface IUser {
  UserId: number;
  Characters: Character[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}

export interface IMonster {
  "count": number,
  "next":  any,
  "previous": any,
  "results": Array<
    {
      "slug": string,
      "name": string,
      "size": string,
      "type": string,
      "subtype": string,
      "group": null,
      "alignment": string,
      "armor_class": number,
      "armor_desc": string,
      "hit_points": number,
      "hit_dice": string,
      "speed": {
        "walk": number,
        "swim": number
      },
      "strength": number,
      "dexterity": number,
      "constitution": number,
      "intelligence": number,
      "wisdom": number,
      "charisma": number,
      "strength_save": null,
      "dexterity_save": null,
      "constitution_save": number,
      "intelligence_save": number,
      "wisdom_save": number,
      "charisma_save": null,
      "perception": number,
      "damage_vulnerabilities": string,
      "damage_resistances": string,
      "damage_immunities": string,
      "condition_immunities": string,
      "senses": string,
      "languages": string,
      "challenge_rating": string,
      "actions": [
        {
          "name": string,
          "desc": string
        },
        {
          "name": string,
          "desc": string,
          "attack_bonus": number,
          "damage_dice": string,
          "damage_bonus": number
        },
        {
          "name": string,
          "desc": string,
          "attack_bonus": number,
          "damage_dice": string,
          "damage_bonus": number
        },
        {
          "name": string,
          "desc": string
        }
      ],
      "reactions": string,
      "legendary_actions": [
        {
          "name": string,
          "desc": string
        },
        {
          "name": string,
          "desc": string
        },
        {
          "name": string,
          "desc": string
        }
      ],
      "special_abilities": [
        {
          "name": string,
          "desc": string
        },
        {
          "name": string,
          "desc": string
        },
        {
          "name": string,
          "desc": string
        }
      ],
      "document_slug": string
    }
  >
}


export interface IMons{
  "slug": string,
    "name": string,
      "size": string,
        "type": string,
          "subtype": string,
            "group": null,
              "alignment": string,
                "armor_class": number,
                  "armor_desc": string,
                    "hit_points": number,
                      "hit_dice": string,
                        "speed": {
    "walk": number,
      "swim": number
  },
  "strength": number,
    "dexterity": number,
      "constitution": number,
        "intelligence": number,
          "wisdom": number,
            "charisma": number,
              "strength_save": null,
                "dexterity_save": null,
                  "constitution_save": number,
                    "intelligence_save": number,
                      "wisdom_save": number,
                        "charisma_save": null,
                          "perception": number,
                            "damage_vulnerabilities": string,
                              "damage_resistances": string,
                                "damage_immunities": string,
                                  "condition_immunities": string,
                                    "senses": string,
                                      "languages": string,
                                        "challenge_rating": string,
                                          "actions": [
                                            {
                                              "name": string,
                                              "desc": string
                                            },
                                            {
                                              "name": string,
                                              "desc": string,
                                              "attack_bonus": number,
                                              "damage_dice": string,
                                              "damage_bonus": number
                                            },
                                            {
                                              "name": string,
                                              "desc": string,
                                              "attack_bonus": number,
                                              "damage_dice": string,
                                              "damage_bonus": number
                                            },
                                            {
                                              "name": string,
                                              "desc": string
                                            }
                                          ],
                                            "reactions": string,
                                              "legendary_actions": [
                                                {
                                                  "name": string,
                                                  "desc": string
                                                },
                                                {
                                                  "name": string,
                                                  "desc": string
                                                },
                                                {
                                                  "name": string,
                                                  "desc": string
                                                }
                                              ],
                                                "special_abilities": [
                                                  {
                                                    "name": string,
                                                    "desc": string
                                                  },
                                                  {
                                                    "name": string,
                                                    "desc": string
                                                  },
                                                  {
                                                    "name": string,
                                                    "desc": string
                                                  }
                                                ],
                                                  "document_slug": string
}
