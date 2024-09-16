(function anonymous(context
) {
/*
	Index: 2425
	Path:  Main.adBlocked
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_adBlocked() {
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
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::ADS_BLOCKED
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ADS_BLOCKED = true;
        } else {
            context.setproperty($names[1], true, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Main/adBlocked.js
})