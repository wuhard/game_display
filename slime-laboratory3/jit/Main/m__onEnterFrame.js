(function anonymous(context
) {
/*
	Index: 2431
	Path:  Main::m__onEnterFrame
	Type:  Private
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_onEnterFrame(local1 /* Event */) {
        // Possible use a real "this"

        let stack0 = undefined;
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::IS_ACTIVE
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_ACTIVE;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::game
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Game  */ 
                        stack0 = this.$Bggame;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Update();
                        } else {
                            // 7 0::Update
                            {
                                let t = stack0;
                                const m = t.$BgUpdate || (t = sec.box(stack0), t.$BgUpdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                    case 24:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Main/m__onEnterFrame.js
})