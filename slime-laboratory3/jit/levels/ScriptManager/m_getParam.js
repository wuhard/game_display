(function anonymous(context
) {
/*
	Index: 645
	Path:  levels/ScriptManager::m_getParam
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::int
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_getParam(local1 /* String */, local2 /* int */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        /* Force int coerce */
        local2 = (local2|0);
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        // JIT: potential type:7 0::String// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = "_";// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.split("_");
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::split
                            {
                                let t = local1;
                                const m = t.$Bgsplit || (t = sec.box(local1), t.$Bgsplit);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgsplit ("_");
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], ["_"], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_getParam] Coerce Type not found:', "Array")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        // JIT: potential type:7 0::int
                        stack0 = local2;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::length
                        //Possible type:undefined
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['length'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (!(stack1 <= local2)) { p = 25; continue; };
                        stack0 = 0;
                        return 0;
                    case 25:
                        // 7 0::Number
                        stack0 = scope0.findScopeProperty($names[3], true, false);
                        stack1 = local3;
                        // JIT: potential type:7 0::int
                        stack2 = local2;
                        // 27 {3, 0:levels, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 3, 2:levels, 0:flash.events, 0:flash.geom, 0:entities, 0:entities.enemies, 0:levels.collisions, 1:levels:ScriptManager, 5:levels:ScriptManager}::*
                        {
                            let simple = local2;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[4], local2);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.Number(stack1);
                        } else {
                            // 7 0::Number
                            {
                                let t = stack0;
                                const m = t.$BgNumber || (t = sec.box(stack0), t.$BgNumber);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgNumber (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[3], [stack1], false);
                                }
                            }
                        }
                        return (stack0|0);
                    }
                }
            }
//# sourceURL=http://jit/levels/ScriptManager/m_getParam.js
})