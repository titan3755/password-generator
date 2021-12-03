const PWGEN = (pwLength: number, inUP: boolean, inLO: boolean, inNU: boolean, inSY: boolean): string => {
    const alphabetLO = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetUP = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    const numbers = '0123456789'
    const symbols = '~!@#$%^&*()<>?/{}[]\\|'
    const template = `${inUP ? alphabetUP : ''}${inLO ? alphabetLO : ''}${inNU ? numbers : ''}${inSY ? symbols : ''}`
    let password: string = ''
    for (let i = 0; i < pwLength; i++) {
        password += template[Math.floor(Math.random() * template.length)]
    }
    return password
}

export default PWGEN