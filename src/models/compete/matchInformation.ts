interface XPBonus {
  fromAnswer: number;
  fromMatchResult: number;
  total: number;
}

interface MatchDetail {
  xpBonus: XPBonus;
}

export default MatchDetail;
