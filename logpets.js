class Log{
    static cat() {
        console.log("   /\\_/\\\n"+
                    "   >^.^<.---.\n"+
                    "  _'-`-'     )\\\n"+
                    " (6--\\ |--\\ (`.`-.\n"+
                    "     --'  --'  ``-'\n");
    }

    static penguin(){
        console.log("(o<\n"+
                    "//\\\n"+
                    "V_/_ \n");
    }

    static turtle(){
        console.log("    ____\n"+
                    " __/-^-^\\\n"+
                    "(' )^-^-^\\)\n"+
                    " `^UU^^UU^"
        );
    }

    static dinosaur(){
        console.log("               __\n"+
                    "              / _)\n"+
                    "     _/\\/\\/\\_/ /\n"+
                    "   _|         /\n"+
                    " _|  (  | (  |\n"+
                    "/__.-'|_|--|_|");
    }

    static cow(){
        console.log("         __n__n__\n"+
                    "  .------`-\\00/-'\n"+
                    " /  ##  ## (oo)\n"+
                    "/ \\## __   ./\n"+
                    "   |//YY \\|/\n"+
                    "   |||   |||");
    }

    static unicorn(){
        console.log('                               /\n'+
                    '                    __       //\n'+
                    '                    -\\= \\=\\ //\n'+
                    '                  --=_\\=---//=--\n'+
                    '                -_==/  \\/ //\\/--\n'+
                    '                 ==/   /O   O\\==--\n'+
                    '    _ _ _ _     /_/    \  ]  /--\n'+
                    '   /\\ ( (- \\    /       ] ] ]==-\n'+
                    '  (\\ _\\_\\_\\-\\__/     \  (,_,)--\n'+
                    ' (\\_/                 \\     \\-\n'+
                    ' \\/      /       (   ( \\  ] /)\n'+
                    ' /      (         \\   \\_ \\./ )\n'+
                    ' (       \\         \\      )  \\\n'+
                    ' (       /\\_ _ _ _ /---/ /\\_  \\\n'+
                    '  \\     / \\     / ____/ /   \\  \\\n'+
                    '   (   /   )   / /  /__ )   (  )\n'+
                    '   (  )   / __/ \'---`       / /\n'+
                    '   \\  /   \\ \\             _/ /\n'+
                    '   ] ]     )_\\_         /__\\/\n'+
                    '   /_\\     ]___\\\n'+
                    '  (___)');
    }

    static dog(){
        console.log('          __\n'+
                    ' \\ ______/ V`-,\n'+
                    '  }        /~~\n'+
                    " /_)^ --,r'\n"+
                    '|b      |b\n');
    }

    static bunny(){
        console.log('           /\\ /|\n'+
                    '          |||| |\n'+
                    '           \\ | \\\n'+
                    '       _ _ /  @ @\n'+
                    '     /    \   =>X<=\n'+
                    '   /|      |   /\n'+
                    '   \\|     /__| |\n'+
                    '     \\_____\\ \\__\\')
    }

    static giraffe(){
        console.log('    /)/)\n'+
                    '   ( ..\\\n'+
                    "   /'-._)\n"+
                    '  /#/\n'+
                    ' /#/')
    }

    static nyan() {

        var frame1 = () => {
            return new Promise((resolve) => {
                process.stdout.write("\x1b[31m"+'**********');process.stdout.write("\x1b[37m"+',------,\n');
                process.stdout.write("\x1b[33m"+'#########');process.stdout.write("\x1b[37m"+'v|   /\\_/\\\n' );
                process.stdout.write("\x1b[36m"+'==========');process.stdout.write("\x1b[37m"+'|__( ^ W^)\n');
                process.stdout.write('        ');process.stdout.write("\x1b[37m"+'    "  "');
                setTimeout(() => {
                    process.stdout.write('\x1Bc')
                    resolve()
                }, 70);
            })
        }

        var frame2 = () => {
            return new Promise((resolve) => {
                process.stdout.write("\x1b[36m"+'==========');process.stdout.write("\x1b[37m"+',------,\n');
                process.stdout.write("\x1b[31m"+'*********');process.stdout.write("\x1b[37m"+'~|    /\\_/\\\n');
                process.stdout.write("\x1b[33m"+'##########');process.stdout.write("\x1b[37m"+'|___( ^ W^)\n');
                process.stdout.write("        ");process.stdout.write('     "  "');
                setTimeout(() => {
                    process.stdout.write('\x1Bc')
                    resolve()
                }, 70);
            })
        }

        var frame3 = () => {
            return new Promise((resolve) => {
                process.stdout.write("\x1b[33m"+'#########');process.stdout.write("\x1b[37m"+' ,------,\n');
                process.stdout.write("\x1b[36m"+'=========');process.stdout.write("\x1b[37m"+'^|    /\\_/\\\n');
                process.stdout.write("\x1b[31m"+'*********');process.stdout.write("\x1b[37m"+' |___( ^ W^)\n');
                process.stdout.write("        ");process.stdout.write('      "  "');
                setTimeout(() => {
                    process.stdout.write('\x1Bc')
                    resolve()
                }, 70);
            })
        }

        var fun = () => {
            frame1().then(() => {
                frame2().then(() => {
                    frame3().then(() => {
                        frame2().then(fun)
                    })
                })
            })
        }

        fun()
    }
}

module.exports = Log