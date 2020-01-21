function Fighter(fighter) {
    let health = fighter.hp;
    let wins = 0;
    let losses = 0;  
    return {
        getName: function () {
            return fighter.name;
        },
        getDamage: function () {
            return fighter.damage;
        },
        getStrenght: function () {
            return fighter.strength;
        },
        getAgility: function () {
            return fighter.agility;
        },
        getHealth: function () {
            return health;
        },
        attack: function (defender) {
            let sto = 100;            
            if (Math.random() * sto > sto - (defender.getStrenght() + defender.getAgility())) {
                console.log(this.getName() + ' makes ' + this.getDamage() + ' damage to '
                    + defender.getName());
                defender.dealDamage(this.getDamage());
            } else {
                console.log(this.getName() + ' attack missed');
            }
        },
        logCombatHistory: function () {
            console.log('Name: ' + this.getName() + ', Wins: ' + wins +
                ', Losses: ' + losses);
        },
        heal: function (healpoints) {
            let healthamount = health + healpoints;
            if (healthamount > this.hp) {
                health = this.hp;
            } else {
                health = healthamount;
            }
        },
        dealDamage: function (damage) {
            if (damage < health) {
                health = health - damage;
            } else {
                health = 0;
            }
        },
        addWin: function () {
            wins++;
        },
        addLoss: function () {
            losses++;
        }
    };
}

function battle(f1, f2) {
    if (f1.getHealth() === 0) {
        console.log(f1.getName() + 'is dead and cannot fight');
    } else if (f2.getHealth() === 0) {
        console.log(f2.getName() + 'is dead and cannot fight');
    } else {
        while (f1.getHealth() > 0 && f2.getHealth() > 0) {
            f1.attack(f2);
            f2.attack(f1);
        }
        if (f1.getHealth() === 0) {
            f1.addLoss();
            f2.addWin();
            console.log(f2.getName() + ' has won!');
        } else if (f2.getHealth() === 0) {
            f2.addLoss();
            f1.addWin();
            console.log(f1.getName() + ' has won!');
        }
    }
}

const f1 = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 });
const f2 = new Fighter({ name: 'Commodus', damage: 30, hp: 100, strength: 20, agility: 20 });
battle(f1, f2);
f1.logCombatHistory();