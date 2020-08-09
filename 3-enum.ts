enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart // index
const membershipReverse = Membership[2]  // string
console.log(membershipReverse)

enum SocialMedia { //если нужно явно указать...
    VK ='Vkontakte',
    FC = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}
const social = SocialMedia.INSTAGRAM