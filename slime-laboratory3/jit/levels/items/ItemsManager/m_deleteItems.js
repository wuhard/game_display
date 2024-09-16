(function anonymous(context
) {
/*
	Index: 609
	Path:  levels/items/ItemsManager::m_deleteItems
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_deleteItems() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 46; continue; };
                    case 9:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgitems;
                        stack1 = local1;
                        // 27 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = null;
                        if (null == stack0) { p = 44; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgitems;
                        stack1 = local1;
                        // 27 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteItem();
                        } else {
                            // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::deleteItem
                            {
                                let t = stack0;
                                const m = t.$BgdeleteItem || (t = sec.box(stack0), t.$BgdeleteItem);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgitems;
                        stack1 = local1;
                        stack2 = null;
                        context.setproperty(context.runtimename($names[0], local1), null, stack0);
                    case 44:
                        local1 = (local1 | 0) + 1;
                    case 46:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$Bgitems;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (stack1 > local1) { p = 9; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::items
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$Bgitems = null;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/items/ItemsManager/m_deleteItems.js
})