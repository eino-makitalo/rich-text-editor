module.exports = [
    {action: '\\sqrt', label: '\\sqrt{X}'},
    {action: '^', label: 'x^{X}'},
    {action: '\\frac', label: '\\frac{X}{X}'},
    {action: '\\int', label: '\\int_{X}^{X}'},
    {action: '\\intsub', label: '\\bigg/_{\\!\\!\\!\\!X}^{X}'},
    {action: '\\lim_', label: '\\lim_{X}'},
    {action: '\\lim_{x\\rightarrow\\infty}', label: '\\lim_{x\\rightarrow\\infty}', useWrite:true},
    {action: '\\overrightarrow', label: '\\overrightarrow{X}'},
    {action: '_', label: 'x_X'},
    {action: '\\nthroot', label: '\\sqrt[X]{X}'},
    {action: '\\sum', label: '\\sum_{X}^{X}'},
    {action: '\\binom', label: '\\binom{X}{X}'},
    {action: '\\sin'},
    {action: '\\cos'},
    {action: '\\tan'},
    {action: '\\vec', label: '\\vec{X}'},
    {action: '\\bar', label: '\\bar{X}'},
    {action: '\\overline{\\text{i}}', useWrite: true},
    {action: '\\overline{\\text{j}}', useWrite: true},
    {action: '\\overline{\\text{k}}', useWrite: true},
    {action: '\\overleftarrow', label: '\\overleftarrow{X}'},
    {action: '|', label: '|X|'},
    {action: '(', label: '(X)'},
    {action: '_{ }^{ } ', label: '_{X}^{X}X', useWrite: true},
    {action: '\\cases', label: '\\begin{cases}X\\\\X\\end{cases}'},
    {action: '\\array', label: '\\begin{array}{l|l}X&X\\\\\\hlineX&X\\\\X&X\\end{array}'},
    {action: '\\frac{a}{b}^{\\text{(}x}', label: '\\frac{X}{X}^{\\text{(}X}', useWrite: true},
    {action: '^{x\\text{)}}\\frac{a}{b}', label: '^{X\\text{)}}\\frac{X}{X}', useWrite: true},
    {action: '\\mathrm', label: '\\mathrm{T}'}
]
