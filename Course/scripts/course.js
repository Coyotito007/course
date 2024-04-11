Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class FictionalGameSystemSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "walk", default: 0x0FFF00, name: "walk"},
                {id: "encombre", default: 0xF0FF00, name: "encombre"},
                {id: "dash", default: 0xFFFF00, name: "dash"}
                ]
        }

        getRanges(token) {

            const baseSpeed = token.actor.system.attributes.agility.value + token.actor.system.attributes.strength.value + 5

			if (token.actor.system.isEncumbered=== "encumbered") {
                const ranges = [

                    {range: baseSpeed / 2, color: "encombre"},
                    {range: baseSpeed, color: "walk"}
				    
                ]

                return ranges
            }

            else {const ranges = [

				{range: baseSpeed, color: "walk"},
				{range: baseSpeed * 2, color: "dash"}
			]

            return ranges
        }
                

			
        }
    }

    dragRuler.registerModule("Course", FictionalGameSystemSpeedProvider)
})