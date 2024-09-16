(function anonymous(context
) {
/*
	Index: 2428
	Path:  Main::m_fetchLanguage
	Type:  Private
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_fetchLanguage() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = "_en";// JIT: redundant assigment, value unused
        // 7 0::Lang
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.Lang = "_en";
        } else {
            context.setproperty($names[1], "_en", stack0);
        }
        return;
    }
//# sourceURL=http://jit/Main/m_fetchLanguage.js
})