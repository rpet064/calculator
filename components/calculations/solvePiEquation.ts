const math = require('mathjs')
const parser = new math.Parser()

const solvePiEquation = (equation: string): string => {
    let equationReplacedPi = replacePiSymbol(equation, 'pi')
    return parser.evaluate(equationReplacedPi)
}

function replacePiSymbol(equation: string, replacementString: string) {
    return equation.replace(/𝝅/g, replacementString)
}

export { solvePiEquation, replacePiSymbol }