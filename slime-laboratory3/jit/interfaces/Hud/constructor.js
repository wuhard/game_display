(function anonymous(context
) {
/*
	Index: 649
	Path:  interfaces/Hud::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 1:interfaces:Hud::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = local1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::SKIP_REWARD_GRANTED
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgSKIP_REWARD_GRANTED = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::checkpointCollisionToUnlock
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels.collisions::CheckpointCollision  */ 
                        this.$BgcheckpointCollisionToUnlock = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 34;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::yToReach
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgyToReach = 34;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
//                        stack2 = false;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = false;// JIT: redundant assigment, value unused
                        local3 = false;
                        // 7 1:interfaces:Hud::IS_CHECKPOINT_STAYING
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_CHECKPOINT_STAYING = false;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:interfaces:Hud::IS_SKIP_STAYING
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_SKIP_STAYING = (!!local3);
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::IS_IPHONE_X
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_IPHONE_X'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_IPHONE_X;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 69; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 24;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::additional_x_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_x_margin = 24;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::additional_y_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_y_margin = 4;
                        { p = 81; continue; };
                    case 69:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::additional_x_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_x_margin = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::additional_y_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_y_margin = 0;
                    case 81:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::HudSprite
                        stack1 = scope0.findScopeProperty($names[2], true, false);
                        stack1 = context.constructprop($names[2], stack1, []);
                        // 7 0::hudSprite
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::HudSprite  */ 
                        this.$BghudSprite = stack1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:7 0::HudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack1 = this.$BghudSprite;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = 0;
                        } else {
                            context.setproperty($names[5], 0, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:7 0::HudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = 0;
                        } else {
                            context.setproperty($names[6], 0, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerLifes
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['PlayerLifes'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgPlayerLifes;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 1:interfaces:Hud::lastLifeValue
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BglastLifeValue = (stack1|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 22;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::radius
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgradius = 22;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::accum
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgaccum = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:7 0::HudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack1 = this.$BghudSprite;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::GFX_SCALE
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GFX_SCALE'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGFX_SCALE;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack3 = stack2;
                        local3 = stack3;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = stack2;
                        } else {
                            context.setproperty($names[9], stack2, stack1);
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local3;
                        } else {
                            context.setproperty($names[10], local3, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[12], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[12]);
                        }
                        // 7 0::KEY_UP
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_UP'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_UP;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::keyUpHudListener
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[14]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[15], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[17], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[17]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::checkpointButtonHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[15], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[17], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[17]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::checkpointButtonHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[15], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
//                        stack1 = 240;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = 240;
                        } else {
                            context.setproperty($names[6], 240, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack1 = -33;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = -33;
                        } else {
                            context.setproperty($names[6], -33, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack1 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['skipLevelButton'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgskipLevelButton;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = 0.95;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0.95;// JIT: redundant assigment, value unused
                        local3 = 0.95;
                        // 7 0::alpha
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.alpha = 0.95;
                        } else {
                            context.setproperty($names[21], 0.95, stack1);
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = local3;
                        } else {
                            context.setproperty($names[21], local3, stack0);
                        }
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[22], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[22]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.instance();
                        } else {
                            // 7 0::instance
                            {
                                let t = stack0;
                                const m = t.$Bginstance || (t = sec.box(stack0), t.$Bginstance);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bginstance ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[23], [], false);
                                }
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::callBackRewardedBreakHud
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack1 = this.axGetProperty($names[24]);
                        // 7 0::callBackRewardedBreak
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.callBackRewardedBreak = stack1;
                        } else {
                            context.setproperty($names[25], stack1, stack0);
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/Hud/constructor.js
})