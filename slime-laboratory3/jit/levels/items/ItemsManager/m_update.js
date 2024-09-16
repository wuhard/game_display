(function anonymous(context
) {
/*
	Index: 607
	Path:  levels/items/ItemsManager::m_update
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local2 = NaN;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 248; continue; };
                    case 14:
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
                        if (null == stack0) { p = 246; continue; };
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
                            stack0.update();
                        } else {
                            // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
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
                        // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::collect
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collect'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgcollect;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 210; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.items:ItemsManager::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::SPLITTED_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['SPLITTED_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgSPLITTED_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!stack0) { p = 165; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.items:ItemsManager::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::smallHero1
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['smallHero1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsmallHero1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::aabb
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['aabb'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgaabb;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$Bgitems;
                        stack2 = local1;
                        // 27 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::aabb
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['aabb'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgaabb;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.intersects(stack1);
                        } else {
                            // 7 0::intersects
                            {
                                let t = stack0;
                                const m = t.$Bgintersects || (t = sec.box(stack0), t.$Bgintersects);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgintersects (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                        if (!stack0) { p = 116; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
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
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.items:ItemsManager::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.collected(stack1);
                        } else {
                            // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::collected
                            {
                                let t = stack0;
                                const m = t.$Bgcollected || (t = sec.box(stack0), t.$Bgcollected);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[8], [stack1], false);
                                }
                            }
                        }
                        { p = 161; continue; };
                    case 116:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.items:ItemsManager::level
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::smallHero2
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['smallHero2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsmallHero2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::aabb
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['aabb'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgaabb;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$Bgitems;
                        stack2 = local1;
                        // 27 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::aabb
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['aabb'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgaabb;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.intersects(stack1);
                        } else {
                            // 7 0::intersects
                            {
                                let t = stack0;
                                const m = t.$Bgintersects || (t = sec.box(stack0), t.$Bgintersects);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgintersects (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                        if (!stack0) { p = 161; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
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
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.items:ItemsManager::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.collected(stack1);
                        } else {
                            // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::collected
                            {
                                let t = stack0;
                                const m = t.$Bgcollected || (t = sec.box(stack0), t.$Bgcollected);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[8], [stack1], false);
                                }
                            }
                        }
                    case 161:
                        { p = 210; continue; };
                    case 165:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.items:ItemsManager::level
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::aabb
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['aabb'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgaabb;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$Bgitems;
                        stack2 = local1;
                        // 27 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::aabb
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['aabb'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgaabb;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.intersects(stack1);
                        } else {
                            // 7 0::intersects
                            {
                                let t = stack0;
                                const m = t.$Bgintersects || (t = sec.box(stack0), t.$Bgintersects);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgintersects (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                        if (!stack0) { p = 210; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
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
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.items:ItemsManager::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.collected(stack1);
                        } else {
                            // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::collected
                            {
                                let t = stack0;
                                const m = t.$Bgcollected || (t = sec.box(stack0), t.$Bgcollected);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[8], [stack1], false);
                                }
                            }
                        }
                    case 210:
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
                        // 9 {3, 0:levels.items, 1:levels.items:ItemsManager, 0, 3, 2:levels.items, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.items:ItemsManager}::destroy
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['destroy'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdestroy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (!stack0) { p = 246; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
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
                                   stack0.axCallProperty($names[12], [], false);
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
                    case 246:
                        local1 = (local1 | 0) + 1;
                    case 248:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::items
                        //Possible type:7 0:levels::Level
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
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
                        if (stack1 > local1) { p = 14; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/items/ItemsManager/m_update.js
})