
local function closemenuinteraction()
   
    SendNUIMessage({ casemenue = 'close'})
end
local function makeinteraction(msg)
    local message = msg
    SendNUIMessage({ casemenue = 'open', msgui = message})
end

exports('makeinteraction', makeinteraction)
exports('closemenuinteraction', closemenuinteraction)
