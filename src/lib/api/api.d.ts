export interface paths {
    "/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Status
         * @description Return the status of the game server.
         *     This also includes a few global elements, such as announcements, server reset dates and leaderboards.
         */
        get: operations["get-status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Register New Agent
         * @description Creates a new agent and ties it to an account.
         *     The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.
         *
         *     This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.
         *
         *     > #### Keep your token safe and secure
         *     >
         *     > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.
         *
         *     If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
         */
        post: operations["register"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/systems": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Systems
         * @description Return a paginated list of all systems.
         */
        get: operations["get-systems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/systems/{systemSymbol}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get System
         * @description Get the details of a system.
         */
        get: operations["get-system"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/systems/{systemSymbol}/waypoints": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
            };
            cookie?: never;
        };
        /**
         * List Waypoints in System
         * @description Return a paginated list of all of the waypoints for a given system.
         *
         *     If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
         */
        get: operations["get-system-waypoints"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/systems/{systemSymbol}/waypoints/{waypointSymbol}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Waypoint
         * @description View the details of a waypoint.
         *
         *     If the waypoint is uncharted, it will return the 'Uncharted' trait instead of its actual traits.
         */
        get: operations["get-waypoint"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/systems/{systemSymbol}/waypoints/{waypointSymbol}/market": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Market
         * @description Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.
         *
         *     Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
         */
        get: operations["get-market"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Shipyard
         * @description Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
         */
        get: operations["get-shipyard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Jump Gate
         * @description Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.
         *
         *     Waypoints connected to this jump gate can be
         */
        get: operations["get-jump-gate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Construction Site
         * @description Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
         */
        get: operations["get-construction"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Supply Construction Site
         * @description Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.
         *
         *     The good must be in your ship's cargo. The good will be removed from your ship's cargo and added to the construction site's materials.
         */
        post: operations["supply-construction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/factions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Factions
         * @description Return a paginated list of all the factions in the game.
         */
        get: operations["get-factions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/factions/{factionSymbol}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The faction symbol */
                factionSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Faction
         * @description View the details of a faction.
         */
        get: operations["get-faction"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/agent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Agent
         * @description Fetch your agent's details.
         */
        get: operations["get-my-agent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Agents
         * @description Fetch agents details.
         */
        get: operations["get-agents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agents/{agentSymbol}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Public Agent
         * @description Fetch agent details.
         */
        get: operations["get-agent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Contracts
         * @description Return a paginated list of all your contracts.
         */
        get: operations["get-contracts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/contracts/{contractId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The contract ID */
                contractId: string;
            };
            cookie?: never;
        };
        /**
         * Get Contract
         * @description Get the details of a contract by ID.
         */
        get: operations["get-contract"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/contracts/{contractId}/accept": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The contract ID to accept. */
                contractId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Accept Contract
         * @description Accept a contract by ID.
         *
         *     You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
         */
        post: operations["accept-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/contracts/{contractId}/deliver": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the contract. */
                contractId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Deliver Cargo to Contract
         * @description Deliver cargo to a contract.
         *
         *     In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.
         *
         *     Cargo that was delivered will be removed from the ship's cargo.
         */
        post: operations["deliver-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/contracts/{contractId}/fulfill": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the contract to fulfill. */
                contractId: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Fulfill Contract
         * @description Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
         */
        post: operations["fulfill-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Ships
         * @description Return a paginated list of all of ships under your agent's ownership.
         */
        get: operations["get-my-ships"];
        put?: never;
        /**
         * Purchase Ship
         * @description Purchase a ship from a Shipyard. In order to use this function, a ship under your agent's ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.
         *
         *     Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
         */
        post: operations["purchase-ship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Ship
         * @description Retrieve the details of a ship under your agent's ownership.
         */
        get: operations["get-my-ship"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/cargo": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Ship Cargo
         * @description Retrieve the cargo of a ship under your agent's ownership.
         */
        get: operations["get-my-ship-cargo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/orbit": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Orbit Ship
         * @description Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.
         *
         *     Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.
         *
         *     The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
         */
        post: operations["orbit-ship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/refine": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Ship Refine
         * @description Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.
         *
         *     When refining, 30 basic goods will be converted into 10 processed goods.
         */
        post: operations["ship-refine"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/chart": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Chart
         * @description Command a ship to chart the waypoint at its current location.
         *
         *     Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.
         *
         *     Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint's traits.
         */
        post: operations["create-chart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/cooldown": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Ship Cooldown
         * @description Retrieve the details of your ship's reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.
         *
         *     Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.
         *
         *     Response returns a 204 status code (no-content) when the ship has no cooldown.
         */
        get: operations["get-ship-cooldown"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/dock": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Dock Ship
         * @description Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.
         *
         *     Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.
         *
         *     The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
         */
        post: operations["dock-ship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/survey": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Survey
         * @description Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.
         *
         *     In order to use a survey, send the entire survey details in the body of the extract request.
         *
         *     Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.
         *
         *     Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey's size. Multiple ships can use the same survey for extraction.
         *
         *     A ship must have the `Surveyor` mount installed in order to use this function.
         */
        post: operations["create-survey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/extract": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Extract Resources
         * @description Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.
         *
         *     The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.
         *
         *     The survey property is now deprecated. See the `extract/survey` endpoint for more details.
         */
        post: operations["extract-resources"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/siphon": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Siphon Resources
         * @description Siphon gases, such as hydrocarbon, from gas giants.
         *
         *     The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
         */
        post: operations["siphon-resources"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/extract/survey": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Extract Resources with Survey
         * @description Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.
         *
         *     Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
         */
        post: operations["extract-resources-with-survey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/jettison": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Jettison Cargo
         * @description Jettison cargo from your ship's cargo hold.
         */
        post: operations["jettison"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/jump": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Jump Ship
         * @description Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.
         *
         *     A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
         */
        post: operations["jump-ship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/navigate": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Navigate Ship
         * @description Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship's current location. Navigating will consume the necessary fuel from the ship's manifest based on the distance to the target waypoint.
         *
         *     The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.
         *
         *     To travel between systems, see the ship's Warp or Jump actions.
         */
        post: operations["navigate-ship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/nav": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Ship Nav
         * @description Get the current nav status of a ship.
         */
        get: operations["get-ship-nav"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Patch Ship Nav
         * @description Update the nav configuration of a ship.
         *
         *     Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
         */
        patch: operations["patch-ship-nav"];
        trace?: never;
    };
    "/my/ships/{shipSymbol}/warp": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Warp Ship
         * @description Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship's manifest.
         *
         *     The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
         */
        post: operations["warp-ship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/sell": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Symbol of a ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sell Cargo
         * @description Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
         */
        post: operations["sell-cargo"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/scan/systems": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Scan Systems
         * @description Scan for nearby systems, retrieving information on the systems' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.
         *
         *     The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
         */
        post: operations["create-ship-system-scan"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/scan/waypoints": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Scan Waypoints
         * @description Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints' traits.
         *
         *     Requires a ship to have the `Sensor Array` mount installed to use.
         *
         *     The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
         */
        post: operations["create-ship-waypoint-scan"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/scan/ships": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Scan Ships
         * @description Scan for nearby ships, retrieving information for all ships in range.
         *
         *     Requires a ship to have the `Sensor Array` mount installed to use.
         *
         *     The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
         */
        post: operations["create-ship-ship-scan"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/refuel": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refuel Ship
         * @description Refuel your ship by buying fuel from the local market.
         *
         *     Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.
         *
         *     Each fuel bought from the market replenishes 100 units in your ship's fuel.
         *
         *     Ships will always be refuel to their frame's maximum fuel capacity when using this action.
         */
        post: operations["refuel-ship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/purchase": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Purchase Cargo
         * @description Purchase cargo from a market.
         *
         *     The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.
         *
         *     The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.
         *
         *     Purchased goods are added to the ship's cargo hold.
         */
        post: operations["purchase-cargo"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/transfer": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The transferring ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Transfer Cargo
         * @description Transfer cargo between ships.
         *
         *     The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.
         *
         *     The response body's cargo shows the cargo of the transferring ship after the transfer is complete.
         */
        post: operations["transfer-cargo"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/negotiate/contract": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Negotiate Contract
         * @description Negotiate a new contract with the HQ.
         *
         *     In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.
         *
         *     Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.
         *
         *     The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
         */
        post: operations["negotiateContract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/mounts": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        /**
         * Get Mounts
         * @description Get the mounts installed on a ship.
         */
        get: operations["get-mounts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/mounts/install": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Install Mount
         * @description Install a mount on a ship.
         *
         *     In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.
         *
         *     An installation fee will be deduced by the Shipyard for installing the mount on the ship.
         */
        post: operations["install-mount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/my/ships/{shipSymbol}/mounts/remove": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Remove Mount
         * @description Remove a mount from a ship.
         *
         *     The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.
         *
         *     A removal fee will be deduced from the agent by the Shipyard.
         */
        post: operations["remove-mount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * @description The activity level of a trade good. If the good is an import, this represents how strong consumption is. If the good is an export, this represents how strong the production is for the good. When activity is strong, consumption or production is near maximum capacity. When activity is weak, consumption or production is near minimum capacity.
         * @enum {string}
         */
        ActivityLevel: "WEAK" | "GROWING" | "STRONG" | "RESTRICTED";
        /** @description Agent details. */
        Agent: {
            /** @description Account ID that is tied to this agent. Only included on your own agent. */
            accountId?: string;
            /** @description Symbol of the agent. */
            symbol: string;
            /** @description The headquarters of the agent. */
            headquarters: string;
            /**
             * Format: int64
             * @description The number of credits the agent has available. Credits can be negative if funds have been overdrawn.
             */
            credits: number;
            /** @description The faction the agent started with. */
            startingFaction: string;
            /** @description How many ships are owned by the agent. */
            shipCount: number;
        };
        /** @description The chart of a system or waypoint, which makes the location visible to other agents. */
        Chart: {
            waypointSymbol?: components["schemas"]["WaypointSymbol"];
            /** @description The agent that submitted the chart for this waypoint. */
            submittedBy?: string;
            /**
             * Format: date-time
             * @description The time the chart for this waypoint was submitted.
             */
            submittedOn?: string;
        };
        /** @description The construction details of a waypoint. */
        Construction: {
            /** @description The symbol of the waypoint. */
            symbol: string;
            /** @description The materials required to construct the waypoint. */
            materials: components["schemas"]["ConstructionMaterial"][];
            /** @description Whether the waypoint has been constructed. */
            isComplete: boolean;
        };
        /** @description The details of the required construction materials for a given waypoint under construction. */
        ConstructionMaterial: {
            tradeSymbol: components["schemas"]["TradeSymbol"];
            /** @description The number of units required. */
            required: number;
            /** @description The number of units fulfilled toward the required amount. */
            fulfilled: number;
        };
        /** @description Contract details. */
        Contract: {
            /** @description ID of the contract. */
            id: string;
            /** @description The symbol of the faction that this contract is for. */
            factionSymbol: string;
            /**
             * @description Type of contract.
             * @enum {string}
             */
            type: "PROCUREMENT" | "TRANSPORT" | "SHUTTLE";
            terms: components["schemas"]["ContractTerms"];
            /**
             * @description Whether the contract has been accepted by the agent
             * @default false
             */
            accepted: boolean;
            /**
             * @description Whether the contract has been fulfilled
             * @default false
             */
            fulfilled: boolean;
            /**
             * Format: date-time
             * @deprecated
             * @description Deprecated in favor of deadlineToAccept
             */
            expiration: string;
            /**
             * Format: date-time
             * @description The time at which the contract is no longer available to be accepted
             */
            deadlineToAccept?: string;
        };
        /** @description The details of a delivery contract. Includes the type of good, units needed, and the destination. */
        ContractDeliverGood: {
            /** @description The symbol of the trade good to deliver. */
            tradeSymbol: string;
            /** @description The destination where goods need to be delivered. */
            destinationSymbol: string;
            /** @description The number of units that need to be delivered on this contract. */
            unitsRequired: number;
            /** @description The number of units fulfilled on this contract. */
            unitsFulfilled: number;
        };
        /** @description Payments for the contract. */
        ContractPayment: {
            /** @description The amount of credits received up front for accepting the contract. */
            onAccepted: number;
            /** @description The amount of credits received when the contract is fulfilled. */
            onFulfilled: number;
        };
        /** @description The terms to fulfill the contract. */
        ContractTerms: {
            /**
             * Format: date-time
             * @description The deadline for the contract.
             */
            deadline: string;
            payment: components["schemas"]["ContractPayment"];
            /** @description The cargo that needs to be delivered to fulfill the contract. */
            deliver?: components["schemas"]["ContractDeliverGood"][];
        };
        /** @description A cooldown is a period of time in which a ship cannot perform certain actions. */
        Cooldown: {
            /** @description The symbol of the ship that is on cooldown */
            shipSymbol: string;
            /** @description The total duration of the cooldown in seconds */
            totalSeconds: number;
            /** @description The remaining duration of the cooldown in seconds */
            remainingSeconds: number;
            /**
             * Format: date-time
             * @description The date and time when the cooldown expires in ISO 8601 format
             */
            expiration?: string;
        };
        /** @description Extraction details. */
        Extraction: {
            /** @description Symbol of the ship that executed the extraction. */
            shipSymbol: string;
            yield: components["schemas"]["ExtractionYield"];
        };
        /** @description A yield from the extraction operation. */
        ExtractionYield: {
            symbol: components["schemas"]["TradeSymbol"];
            /** @description The number of units extracted that were placed into the ship's cargo hold. */
            units: number;
        };
        /** @description Faction details. */
        Faction: {
            symbol: components["schemas"]["FactionSymbol"];
            /** @description Name of the faction. */
            name: string;
            /** @description Description of the faction. */
            description: string;
            /** @description The waypoint in which the faction's HQ is located in. */
            headquarters: string;
            /** @description List of traits that define this faction. */
            traits: components["schemas"]["FactionTrait"][];
            /** @description Whether or not the faction is currently recruiting new agents. */
            isRecruiting: boolean;
        };
        /**
         * @description The symbol of the faction.
         * @enum {string}
         */
        FactionSymbol: "COSMIC" | "VOID" | "GALACTIC" | "QUANTUM" | "DOMINION" | "ASTRO" | "CORSAIRS" | "OBSIDIAN" | "AEGIS" | "UNITED" | "SOLITARY" | "COBALT" | "OMEGA" | "ECHO" | "LORDS" | "CULT" | "ANCIENTS" | "SHADOW" | "ETHEREAL";
        FactionTrait: {
            symbol: components["schemas"]["FactionTraitSymbol"];
            /** @description The name of the trait. */
            name: string;
            /** @description A description of the trait. */
            description: string;
        };
        /**
         * @description The unique identifier of the trait.
         * @enum {string}
         */
        FactionTraitSymbol: "BUREAUCRATIC" | "SECRETIVE" | "CAPITALISTIC" | "INDUSTRIOUS" | "PEACEFUL" | "DISTRUSTFUL" | "WELCOMING" | "SMUGGLERS" | "SCAVENGERS" | "REBELLIOUS" | "EXILES" | "PIRATES" | "RAIDERS" | "CLAN" | "GUILD" | "DOMINION" | "FRINGE" | "FORSAKEN" | "ISOLATED" | "LOCALIZED" | "ESTABLISHED" | "NOTABLE" | "DOMINANT" | "INESCAPABLE" | "INNOVATIVE" | "BOLD" | "VISIONARY" | "CURIOUS" | "DARING" | "EXPLORATORY" | "RESOURCEFUL" | "FLEXIBLE" | "COOPERATIVE" | "UNITED" | "STRATEGIC" | "INTELLIGENT" | "RESEARCH_FOCUSED" | "COLLABORATIVE" | "PROGRESSIVE" | "MILITARISTIC" | "TECHNOLOGICALLY_ADVANCED" | "AGGRESSIVE" | "IMPERIALISTIC" | "TREASURE_HUNTERS" | "DEXTEROUS" | "UNPREDICTABLE" | "BRUTAL" | "FLEETING" | "ADAPTABLE" | "SELF_SUFFICIENT" | "DEFENSIVE" | "PROUD" | "DIVERSE" | "INDEPENDENT" | "SELF_INTERESTED" | "FRAGMENTED" | "COMMERCIAL" | "FREE_MARKETS" | "ENTREPRENEURIAL";
        JumpGate: {
            symbol: components["schemas"]["WaypointSymbol"];
            /** @description All the gates that are connected to this waypoint. */
            connections: string[];
        };
        Market: {
            /** @description The symbol of the market. The symbol is the same as the waypoint where the market is located. */
            symbol: string;
            /** @description The list of goods that are exported from this market. */
            exports: components["schemas"]["TradeGood"][];
            /** @description The list of goods that are sought as imports in this market. */
            imports: components["schemas"]["TradeGood"][];
            /** @description The list of goods that are bought and sold between agents at this market. */
            exchange: components["schemas"]["TradeGood"][];
            /** @description The list of recent transactions at this market. Visible only when a ship is present at the market. */
            transactions?: components["schemas"]["MarketTransaction"][];
            /** @description The list of goods that are traded at this market. Visible only when a ship is present at the market. */
            tradeGoods?: components["schemas"]["MarketTradeGood"][];
        };
        MarketTradeGood: {
            symbol: components["schemas"]["TradeSymbol"];
            /**
             * @description The type of trade good (export, import, or exchange).
             * @enum {string}
             */
            type: "EXPORT" | "IMPORT" | "EXCHANGE";
            /** @description This is the maximum number of units that can be purchased or sold at this market in a single trade for this good. Trade volume also gives an indication of price volatility. A market with a low trade volume will have large price swings, while high trade volume will be more resilient to price changes. */
            tradeVolume: number;
            supply: components["schemas"]["SupplyLevel"];
            activity?: components["schemas"]["ActivityLevel"];
            /** @description The price at which this good can be purchased from the market. */
            purchasePrice: number;
            /** @description The price at which this good can be sold to the market. */
            sellPrice: number;
        };
        /** @description Result of a transaction with a market. */
        MarketTransaction: {
            waypointSymbol: components["schemas"]["WaypointSymbol"];
            /** @description The symbol of the ship that made the transaction. */
            shipSymbol: string;
            /** @description The symbol of the trade good. */
            tradeSymbol: string;
            /**
             * @description The type of transaction.
             * @enum {string}
             */
            type: "PURCHASE" | "SELL";
            /** @description The number of units of the transaction. */
            units: number;
            /** @description The price per unit of the transaction. */
            pricePerUnit: number;
            /** @description The total price of the transaction. */
            totalPrice: number;
            /**
             * Format: date-time
             * @description The timestamp of the transaction.
             */
            timestamp: string;
        };
        /** @description Meta details for pagination. */
        Meta: {
            /** @description Shows the total amount of items of this kind that exist. */
            total: number;
            /**
             * @description A page denotes an amount of items, offset from the first item. Each page holds an amount of items equal to the `limit`.
             * @default 1
             */
            page: number;
            /**
             * @description The amount of items in each page. Limits how many items can be fetched at once.
             * @default 10
             */
            limit: number;
        };
        /** @description The ship that was scanned. Details include information about the ship that could be detected by the scanner. */
        ScannedShip: {
            /** @description The globally unique identifier of the ship. */
            symbol: string;
            registration: components["schemas"]["ShipRegistration"];
            nav: components["schemas"]["ShipNav"];
            /** @description The frame of the ship. */
            frame?: {
                /** @description The symbol of the frame. */
                symbol: string;
            };
            /** @description The reactor of the ship. */
            reactor?: {
                /** @description The symbol of the reactor. */
                symbol: string;
            };
            /** @description The engine of the ship. */
            engine: {
                /** @description The symbol of the engine. */
                symbol: string;
            };
            /** @description List of mounts installed in the ship. */
            mounts?: {
                /** @description The symbol of the mount. */
                symbol: string;
            }[];
        };
        /** @description Details of a system was that scanned. */
        ScannedSystem: {
            /** @description Symbol of the system. */
            symbol: string;
            /** @description Symbol of the system's sector. */
            sectorSymbol: string;
            type: components["schemas"]["SystemType"];
            /** @description Position in the universe in the x axis. */
            x: number;
            /** @description Position in the universe in the y axis. */
            y: number;
            /** @description The system's distance from the scanning ship. */
            distance: number;
        };
        /** @description A waypoint that was scanned by a ship. */
        ScannedWaypoint: {
            symbol: components["schemas"]["WaypointSymbol"];
            type: components["schemas"]["WaypointType"];
            systemSymbol: components["schemas"]["SystemSymbol"];
            /** @description Position in the universe in the x axis. */
            x: number;
            /** @description Position in the universe in the y axis. */
            y: number;
            /** @description List of waypoints that orbit this waypoint. */
            orbitals: components["schemas"]["WaypointOrbital"][];
            faction?: components["schemas"]["WaypointFaction"];
            /** @description The traits of the waypoint. */
            traits: components["schemas"]["WaypointTrait"][];
            chart?: components["schemas"]["Chart"];
        };
        /** @description Ship details. */
        Ship: {
            /** @description The globally unique identifier of the ship in the following format: `[AGENT_SYMBOL]-[HEX_ID]` */
            symbol: string;
            registration: components["schemas"]["ShipRegistration"];
            nav: components["schemas"]["ShipNav"];
            crew: components["schemas"]["ShipCrew"];
            frame: components["schemas"]["ShipFrame"];
            reactor: components["schemas"]["ShipReactor"];
            engine: components["schemas"]["ShipEngine"];
            cooldown: components["schemas"]["Cooldown"];
            /** @description Modules installed in this ship. */
            modules: components["schemas"]["ShipModule"][];
            /** @description Mounts installed in this ship. */
            mounts: components["schemas"]["ShipMount"][];
            cargo: components["schemas"]["ShipCargo"];
            fuel: components["schemas"]["ShipFuel"];
        };
        /** @description Ship cargo details. */
        ShipCargo: {
            /** @description The max number of items that can be stored in the cargo hold. */
            capacity: number;
            /** @description The number of items currently stored in the cargo hold. */
            units: number;
            /** @description The items currently in the cargo hold. */
            inventory: components["schemas"]["ShipCargoItem"][];
        };
        /** @description The type of cargo item and the number of units. */
        ShipCargoItem: {
            symbol: components["schemas"]["TradeSymbol"];
            /** @description The name of the cargo item type. */
            name: string;
            /** @description The description of the cargo item type. */
            description: string;
            /** @description The number of units of the cargo item. */
            units: number;
        };
        /** @description Condition is a range of 0 to 100 where 0 is completely worn out and 100 is brand new. */
        ShipCondition: number;
        /** @description The ship's crew service and maintain the ship's systems and equipment. */
        ShipCrew: {
            /** @description The current number of crew members on the ship. */
            current: number;
            /** @description The minimum number of crew members required to maintain the ship. */
            required: number;
            /** @description The maximum number of crew members the ship can support. */
            capacity: number;
            /**
             * @description The rotation of crew shifts. A stricter shift improves the ship's performance. A more relaxed shift improves the crew's morale.
             * @default STRICT
             * @enum {string}
             */
            rotation: "STRICT" | "RELAXED";
            /** @description A rough measure of the crew's morale. A higher morale means the crew is happier and more productive. A lower morale means the ship is more prone to accidents. */
            morale: number;
            /** @description The amount of credits per crew member paid per hour. Wages are paid when a ship docks at a civilized waypoint. */
            wages: number;
        };
        /** @description The engine determines how quickly a ship travels between waypoints. */
        ShipEngine: {
            /**
             * @description The symbol of the engine.
             * @enum {string}
             */
            symbol: "ENGINE_IMPULSE_DRIVE_I" | "ENGINE_ION_DRIVE_I" | "ENGINE_ION_DRIVE_II" | "ENGINE_HYPER_DRIVE_I";
            /** @description The name of the engine. */
            name: string;
            /** @description The description of the engine. */
            description: string;
            condition?: components["schemas"]["ShipCondition"];
            /** @description The speed stat of this engine. The higher the speed, the faster a ship can travel from one point to another. Reduces the time of arrival when navigating the ship. */
            speed: number;
            requirements: components["schemas"]["ShipRequirements"];
        };
        /** @description The frame of the ship. The frame determines the number of modules and mounting points of the ship, as well as base fuel capacity. As the condition of the frame takes more wear, the ship will become more sluggish and less maneuverable. */
        ShipFrame: {
            /**
             * @description Symbol of the frame.
             * @enum {string}
             */
            symbol: "FRAME_PROBE" | "FRAME_DRONE" | "FRAME_INTERCEPTOR" | "FRAME_RACER" | "FRAME_FIGHTER" | "FRAME_FRIGATE" | "FRAME_SHUTTLE" | "FRAME_EXPLORER" | "FRAME_MINER" | "FRAME_LIGHT_FREIGHTER" | "FRAME_HEAVY_FREIGHTER" | "FRAME_TRANSPORT" | "FRAME_DESTROYER" | "FRAME_CRUISER" | "FRAME_CARRIER";
            /** @description Name of the frame. */
            name: string;
            /** @description Description of the frame. */
            description: string;
            condition?: components["schemas"]["ShipCondition"];
            /** @description The amount of slots that can be dedicated to modules installed in the ship. Each installed module take up a number of slots, and once there are no more slots, no new modules can be installed. */
            moduleSlots: number;
            /** @description The amount of slots that can be dedicated to mounts installed in the ship. Each installed mount takes up a number of points, and once there are no more points remaining, no new mounts can be installed. */
            mountingPoints: number;
            /** @description The maximum amount of fuel that can be stored in this ship. When refueling, the ship will be refueled to this amount. */
            fuelCapacity: number;
            requirements: components["schemas"]["ShipRequirements"];
        };
        /** @description Details of the ship's fuel tanks including how much fuel was consumed during the last transit or action. */
        ShipFuel: {
            /** @description The current amount of fuel in the ship's tanks. */
            current: number;
            /** @description The maximum amount of fuel the ship's tanks can hold. */
            capacity: number;
            /** @description An object that only shows up when an action has consumed fuel in the process. Shows the fuel consumption data. */
            consumed?: {
                /** @description The amount of fuel consumed by the most recent transit or action. */
                amount: number;
                /**
                 * Format: date-time
                 * @description The time at which the fuel was consumed.
                 */
                timestamp: string;
            };
        };
        /** @description Result of a transaction for a ship modification, such as installing a mount or a module. */
        ShipModificationTransaction: {
            /** @description The symbol of the waypoint where the transaction took place. */
            waypointSymbol: string;
            /** @description The symbol of the ship that made the transaction. */
            shipSymbol: string;
            /** @description The symbol of the trade good. */
            tradeSymbol: string;
            /** @description The total price of the transaction. */
            totalPrice: number;
            /**
             * Format: date-time
             * @description The timestamp of the transaction.
             */
            timestamp: string;
        };
        /** @description A module can be installed in a ship and provides a set of capabilities such as storage space or quarters for crew. Module installations are permanent. */
        ShipModule: {
            /**
             * @description The symbol of the module.
             * @enum {string}
             */
            symbol: "MODULE_MINERAL_PROCESSOR_I" | "MODULE_GAS_PROCESSOR_I" | "MODULE_CARGO_HOLD_I" | "MODULE_CARGO_HOLD_II" | "MODULE_CARGO_HOLD_III" | "MODULE_CREW_QUARTERS_I" | "MODULE_ENVOY_QUARTERS_I" | "MODULE_PASSENGER_CABIN_I" | "MODULE_MICRO_REFINERY_I" | "MODULE_ORE_REFINERY_I" | "MODULE_FUEL_REFINERY_I" | "MODULE_SCIENCE_LAB_I" | "MODULE_JUMP_DRIVE_I" | "MODULE_JUMP_DRIVE_II" | "MODULE_JUMP_DRIVE_III" | "MODULE_WARP_DRIVE_I" | "MODULE_WARP_DRIVE_II" | "MODULE_WARP_DRIVE_III" | "MODULE_SHIELD_GENERATOR_I" | "MODULE_SHIELD_GENERATOR_II";
            /** @description Modules that provide capacity, such as cargo hold or crew quarters will show this value to denote how much of a bonus the module grants. */
            capacity?: number;
            /** @description Modules that have a range will such as a sensor array show this value to denote how far can the module reach with its capabilities. */
            range?: number;
            /** @description Name of this module. */
            name: string;
            /** @description Description of this module. */
            description: string;
            requirements: components["schemas"]["ShipRequirements"];
        };
        /** @description A mount is installed on the exterier of a ship. */
        ShipMount: {
            /**
             * @description Symbo of this mount.
             * @enum {string}
             */
            symbol: "MOUNT_GAS_SIPHON_I" | "MOUNT_GAS_SIPHON_II" | "MOUNT_GAS_SIPHON_III" | "MOUNT_SURVEYOR_I" | "MOUNT_SURVEYOR_II" | "MOUNT_SURVEYOR_III" | "MOUNT_SENSOR_ARRAY_I" | "MOUNT_SENSOR_ARRAY_II" | "MOUNT_SENSOR_ARRAY_III" | "MOUNT_MINING_LASER_I" | "MOUNT_MINING_LASER_II" | "MOUNT_MINING_LASER_III" | "MOUNT_LASER_CANNON_I" | "MOUNT_MISSILE_LAUNCHER_I" | "MOUNT_TURRET_I";
            /** @description Name of this mount. */
            name: string;
            /** @description Description of this mount. */
            description?: string;
            /** @description Mounts that have this value, such as mining lasers, denote how powerful this mount's capabilities are. */
            strength?: number;
            /** @description Mounts that have this value denote what goods can be produced from using the mount. */
            deposits?: ("QUARTZ_SAND" | "SILICON_CRYSTALS" | "PRECIOUS_STONES" | "ICE_WATER" | "AMMONIA_ICE" | "IRON_ORE" | "COPPER_ORE" | "SILVER_ORE" | "ALUMINUM_ORE" | "GOLD_ORE" | "PLATINUM_ORE" | "DIAMONDS" | "URANITE_ORE" | "MERITIUM_ORE")[];
            requirements: components["schemas"]["ShipRequirements"];
        };
        /** @description The navigation information of the ship. */
        ShipNav: {
            systemSymbol: components["schemas"]["SystemSymbol"];
            waypointSymbol: components["schemas"]["WaypointSymbol"];
            route: components["schemas"]["ShipNavRoute"];
            status: components["schemas"]["ShipNavStatus"];
            flightMode: components["schemas"]["ShipNavFlightMode"];
        };
        /**
         * @description The ship's set speed when traveling between waypoints or systems.
         * @default CRUISE
         * @enum {string}
         */
        ShipNavFlightMode: "DRIFT" | "STEALTH" | "CRUISE" | "BURN";
        /** @description The routing information for the ship's most recent transit or current location. */
        ShipNavRoute: {
            destination: components["schemas"]["ShipNavRouteWaypoint"];
            origin: components["schemas"]["ShipNavRouteWaypoint"];
            /**
             * Format: date-time
             * @description The date time of the ship's departure.
             */
            departureTime: string;
            /**
             * Format: date-time
             * @description The date time of the ship's arrival. If the ship is in-transit, this is the expected time of arrival.
             */
            arrival: string;
        };
        /** @description The destination or departure of a ships nav route. */
        ShipNavRouteWaypoint: {
            /** @description The symbol of the waypoint. */
            symbol: string;
            type: components["schemas"]["WaypointType"];
            systemSymbol: components["schemas"]["SystemSymbol"];
            /** @description Position in the universe in the x axis. */
            x: number;
            /** @description Position in the universe in the y axis. */
            y: number;
        };
        /**
         * @description The current status of the ship
         * @enum {string}
         */
        ShipNavStatus: "IN_TRANSIT" | "IN_ORBIT" | "DOCKED";
        /** @description The reactor of the ship. The reactor is responsible for powering the ship's systems and weapons. */
        ShipReactor: {
            /**
             * @description Symbol of the reactor.
             * @enum {string}
             */
            symbol: "REACTOR_SOLAR_I" | "REACTOR_FUSION_I" | "REACTOR_FISSION_I" | "REACTOR_CHEMICAL_I" | "REACTOR_ANTIMATTER_I";
            /** @description Name of the reactor. */
            name: string;
            /** @description Description of the reactor. */
            description: string;
            condition?: components["schemas"]["ShipCondition"];
            /** @description The amount of power provided by this reactor. The more power a reactor provides to the ship, the lower the cooldown it gets when using a module or mount that taxes the ship's power. */
            powerOutput: number;
            requirements: components["schemas"]["ShipRequirements"];
        };
        /** @description The public registration information of the ship */
        ShipRegistration: {
            /** @description The agent's registered name of the ship */
            name: string;
            /** @description The symbol of the faction the ship is registered with */
            factionSymbol: string;
            role: components["schemas"]["ShipRole"];
        };
        /** @description The requirements for installation on a ship */
        ShipRequirements: {
            /** @description The amount of power required from the reactor. */
            power?: number;
            /** @description The number of crew required for operation. */
            crew?: number;
            /** @description The number of module slots required for installation. */
            slots?: number;
        };
        /**
         * @description The registered role of the ship
         * @enum {string}
         */
        ShipRole: "FABRICATOR" | "HARVESTER" | "HAULER" | "INTERCEPTOR" | "EXCAVATOR" | "TRANSPORT" | "REPAIR" | "SURVEYOR" | "COMMAND" | "CARRIER" | "PATROL" | "SATELLITE" | "EXPLORER" | "REFINERY";
        /**
         * @description Type of ship
         * @enum {string}
         */
        ShipType: "SHIP_PROBE" | "SHIP_MINING_DRONE" | "SHIP_SIPHON_DRONE" | "SHIP_INTERCEPTOR" | "SHIP_LIGHT_HAULER" | "SHIP_COMMAND_FRIGATE" | "SHIP_EXPLORER" | "SHIP_HEAVY_FREIGHTER" | "SHIP_LIGHT_SHUTTLE" | "SHIP_ORE_HOUND" | "SHIP_REFINING_FREIGHTER" | "SHIP_SURVEYOR";
        Shipyard: {
            /** @description The symbol of the shipyard. The symbol is the same as the waypoint where the shipyard is located. */
            symbol: string;
            /** @description The list of ship types available for purchase at this shipyard. */
            shipTypes: {
                type: components["schemas"]["ShipType"];
            }[];
            /** @description The list of recent transactions at this shipyard. */
            transactions?: components["schemas"]["ShipyardTransaction"][];
            /** @description The ships that are currently available for purchase at the shipyard. */
            ships?: components["schemas"]["ShipyardShip"][];
            /** @description The fee to modify a ship at this shipyard. This includes installing or removing modules and mounts on a ship. In the case of mounts, the fee is a flat rate per mount. In the case of modules, the fee is per slot the module occupies. */
            modificationsFee: number;
        };
        ShipyardShip: {
            type: components["schemas"]["ShipType"];
            name: string;
            description: string;
            supply: components["schemas"]["SupplyLevel"];
            activity?: components["schemas"]["ActivityLevel"];
            purchasePrice: number;
            frame: components["schemas"]["ShipFrame"];
            reactor: components["schemas"]["ShipReactor"];
            engine: components["schemas"]["ShipEngine"];
            modules: components["schemas"]["ShipModule"][];
            mounts: components["schemas"]["ShipMount"][];
            crew: {
                required: number;
                capacity: number;
            };
        };
        /** @description Results of a transaction with a shipyard. */
        ShipyardTransaction: {
            waypointSymbol: components["schemas"]["WaypointSymbol"];
            /**
             * @deprecated
             * @description The symbol of the ship that was the subject of the transaction.
             */
            shipSymbol: string;
            /** @description The symbol of the ship that was the subject of the transaction. */
            shipType: string;
            /** @description The price of the transaction. */
            price: number;
            /** @description The symbol of the agent that made the transaction. */
            agentSymbol: string;
            /**
             * Format: date-time
             * @description The timestamp of the transaction.
             */
            timestamp: string;
        };
        /** @description Siphon details. */
        Siphon: {
            /** @description Symbol of the ship that executed the siphon. */
            shipSymbol: string;
            yield: components["schemas"]["SiphonYield"];
        };
        /** @description A yield from the siphon operation. */
        SiphonYield: {
            symbol: components["schemas"]["TradeSymbol"];
            /** @description The number of units siphoned that were placed into the ship's cargo hold. */
            units: number;
        };
        /**
         * @description The supply level of a trade good.
         * @enum {string}
         */
        SupplyLevel: "SCARCE" | "LIMITED" | "MODERATE" | "HIGH" | "ABUNDANT";
        /** @description A resource survey of a waypoint, detailing a specific extraction location and the types of resources that can be found there. */
        Survey: {
            /** @description A unique signature for the location of this survey. This signature is verified when attempting an extraction using this survey. */
            signature: string;
            /** @description The symbol of the waypoint that this survey is for. */
            symbol: string;
            /** @description A list of deposits that can be found at this location. A ship will extract one of these deposits when using this survey in an extraction request. If multiple deposits of the same type are present, the chance of extracting that deposit is increased. */
            deposits: components["schemas"]["SurveyDeposit"][];
            /**
             * Format: date-time
             * @description The date and time when the survey expires. After this date and time, the survey will no longer be available for extraction.
             */
            expiration: string;
            /**
             * @description The size of the deposit. This value indicates how much can be extracted from the survey before it is exhausted.
             * @enum {string}
             */
            size: "SMALL" | "MODERATE" | "LARGE";
        };
        /** @description A surveyed deposit of a mineral or resource available for extraction. */
        SurveyDeposit: {
            /** @description The symbol of the deposit. */
            symbol: string;
        };
        System: {
            /** @description The symbol of the system. */
            symbol: string;
            /** @description The symbol of the sector. */
            sectorSymbol: string;
            type: components["schemas"]["SystemType"];
            /** @description Relative position of the system in the sector in the x axis. */
            x: number;
            /** @description Relative position of the system in the sector in the y axis. */
            y: number;
            /** @description Waypoints in this system. */
            waypoints: components["schemas"]["SystemWaypoint"][];
            /** @description Factions that control this system. */
            factions: components["schemas"]["SystemFaction"][];
        };
        SystemFaction: {
            symbol: components["schemas"]["FactionSymbol"];
        };
        /** @description The symbol of the system. */
        SystemSymbol: string;
        /**
         * @description The type of system.
         * @enum {string}
         */
        SystemType: "NEUTRON_STAR" | "RED_STAR" | "ORANGE_STAR" | "BLUE_STAR" | "YOUNG_STAR" | "WHITE_DWARF" | "BLACK_HOLE" | "HYPERGIANT" | "NEBULA" | "UNSTABLE";
        SystemWaypoint: {
            symbol: components["schemas"]["WaypointSymbol"];
            type: components["schemas"]["WaypointType"];
            /** @description Relative position of the waypoint on the system's x axis. This is not an absolute position in the universe. */
            x: number;
            /** @description Relative position of the waypoint on the system's y axis. This is not an absolute position in the universe. */
            y: number;
            /** @description Waypoints that orbit this waypoint. */
            orbitals: components["schemas"]["WaypointOrbital"][];
            /** @description The symbol of the parent waypoint, if this waypoint is in orbit around another waypoint. Otherwise this value is undefined. */
            orbits?: string;
        };
        /** @description A good that can be traded for other goods or currency. */
        TradeGood: {
            symbol: components["schemas"]["TradeSymbol"];
            /** @description The name of the good. */
            name: string;
            /** @description The description of the good. */
            description: string;
        };
        /**
         * @description The good's symbol.
         * @enum {string}
         */
        TradeSymbol: "PRECIOUS_STONES" | "QUARTZ_SAND" | "SILICON_CRYSTALS" | "AMMONIA_ICE" | "LIQUID_HYDROGEN" | "LIQUID_NITROGEN" | "ICE_WATER" | "EXOTIC_MATTER" | "ADVANCED_CIRCUITRY" | "GRAVITON_EMITTERS" | "IRON" | "IRON_ORE" | "COPPER" | "COPPER_ORE" | "ALUMINUM" | "ALUMINUM_ORE" | "SILVER" | "SILVER_ORE" | "GOLD" | "GOLD_ORE" | "PLATINUM" | "PLATINUM_ORE" | "DIAMONDS" | "URANITE" | "URANITE_ORE" | "MERITIUM" | "MERITIUM_ORE" | "HYDROCARBON" | "ANTIMATTER" | "FAB_MATS" | "FERTILIZERS" | "FABRICS" | "FOOD" | "JEWELRY" | "MACHINERY" | "FIREARMS" | "ASSAULT_RIFLES" | "MILITARY_EQUIPMENT" | "EXPLOSIVES" | "LAB_INSTRUMENTS" | "AMMUNITION" | "ELECTRONICS" | "SHIP_PLATING" | "SHIP_PARTS" | "EQUIPMENT" | "FUEL" | "MEDICINE" | "DRUGS" | "CLOTHING" | "MICROPROCESSORS" | "PLASTICS" | "POLYNUCLEOTIDES" | "BIOCOMPOSITES" | "QUANTUM_STABILIZERS" | "NANOBOTS" | "AI_MAINFRAMES" | "QUANTUM_DRIVES" | "ROBOTIC_DRONES" | "CYBER_IMPLANTS" | "GENE_THERAPEUTICS" | "NEURAL_CHIPS" | "MOOD_REGULATORS" | "VIRAL_AGENTS" | "MICRO_FUSION_GENERATORS" | "SUPERGRAINS" | "LASER_RIFLES" | "HOLOGRAPHICS" | "SHIP_SALVAGE" | "RELIC_TECH" | "NOVEL_LIFEFORMS" | "BOTANICAL_SPECIMENS" | "CULTURAL_ARTIFACTS" | "FRAME_PROBE" | "FRAME_DRONE" | "FRAME_INTERCEPTOR" | "FRAME_RACER" | "FRAME_FIGHTER" | "FRAME_FRIGATE" | "FRAME_SHUTTLE" | "FRAME_EXPLORER" | "FRAME_MINER" | "FRAME_LIGHT_FREIGHTER" | "FRAME_HEAVY_FREIGHTER" | "FRAME_TRANSPORT" | "FRAME_DESTROYER" | "FRAME_CRUISER" | "FRAME_CARRIER" | "REACTOR_SOLAR_I" | "REACTOR_FUSION_I" | "REACTOR_FISSION_I" | "REACTOR_CHEMICAL_I" | "REACTOR_ANTIMATTER_I" | "ENGINE_IMPULSE_DRIVE_I" | "ENGINE_ION_DRIVE_I" | "ENGINE_ION_DRIVE_II" | "ENGINE_HYPER_DRIVE_I" | "MODULE_MINERAL_PROCESSOR_I" | "MODULE_GAS_PROCESSOR_I" | "MODULE_CARGO_HOLD_I" | "MODULE_CARGO_HOLD_II" | "MODULE_CARGO_HOLD_III" | "MODULE_CREW_QUARTERS_I" | "MODULE_ENVOY_QUARTERS_I" | "MODULE_PASSENGER_CABIN_I" | "MODULE_MICRO_REFINERY_I" | "MODULE_SCIENCE_LAB_I" | "MODULE_JUMP_DRIVE_I" | "MODULE_JUMP_DRIVE_II" | "MODULE_JUMP_DRIVE_III" | "MODULE_WARP_DRIVE_I" | "MODULE_WARP_DRIVE_II" | "MODULE_WARP_DRIVE_III" | "MODULE_SHIELD_GENERATOR_I" | "MODULE_SHIELD_GENERATOR_II" | "MODULE_ORE_REFINERY_I" | "MODULE_FUEL_REFINERY_I" | "MOUNT_GAS_SIPHON_I" | "MOUNT_GAS_SIPHON_II" | "MOUNT_GAS_SIPHON_III" | "MOUNT_SURVEYOR_I" | "MOUNT_SURVEYOR_II" | "MOUNT_SURVEYOR_III" | "MOUNT_SENSOR_ARRAY_I" | "MOUNT_SENSOR_ARRAY_II" | "MOUNT_SENSOR_ARRAY_III" | "MOUNT_MINING_LASER_I" | "MOUNT_MINING_LASER_II" | "MOUNT_MINING_LASER_III" | "MOUNT_LASER_CANNON_I" | "MOUNT_MISSILE_LAUNCHER_I" | "MOUNT_TURRET_I" | "SHIP_PROBE" | "SHIP_MINING_DRONE" | "SHIP_SIPHON_DRONE" | "SHIP_INTERCEPTOR" | "SHIP_LIGHT_HAULER" | "SHIP_COMMAND_FRIGATE" | "SHIP_EXPLORER" | "SHIP_HEAVY_FREIGHTER" | "SHIP_LIGHT_SHUTTLE" | "SHIP_ORE_HOUND" | "SHIP_REFINING_FREIGHTER" | "SHIP_SURVEYOR";
        /** @description A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station. */
        Waypoint: {
            symbol: components["schemas"]["WaypointSymbol"];
            type: components["schemas"]["WaypointType"];
            systemSymbol: components["schemas"]["SystemSymbol"];
            /** @description Relative position of the waypoint on the system's x axis. This is not an absolute position in the universe. */
            x: number;
            /** @description Relative position of the waypoint on the system's y axis. This is not an absolute position in the universe. */
            y: number;
            /** @description Waypoints that orbit this waypoint. */
            orbitals: components["schemas"]["WaypointOrbital"][];
            /** @description The symbol of the parent waypoint, if this waypoint is in orbit around another waypoint. Otherwise this value is undefined. */
            orbits?: string;
            faction?: components["schemas"]["WaypointFaction"];
            /** @description The traits of the waypoint. */
            traits: components["schemas"]["WaypointTrait"][];
            /** @description The modifiers of the waypoint. */
            modifiers?: components["schemas"]["WaypointModifier"][];
            chart?: components["schemas"]["Chart"];
            /** @description True if the waypoint is under construction. */
            isUnderConstruction: boolean;
        };
        /** @description The faction that controls the waypoint. */
        WaypointFaction: {
            symbol: components["schemas"]["FactionSymbol"];
        };
        WaypointModifier: {
            symbol: components["schemas"]["WaypointModifierSymbol"];
            /** @description The name of the trait. */
            name: string;
            /** @description A description of the trait. */
            description: string;
        };
        /**
         * @description The unique identifier of the modifier.
         * @enum {string}
         */
        WaypointModifierSymbol: "STRIPPED" | "UNSTABLE" | "RADIATION_LEAK" | "CRITICAL_LIMIT" | "CIVIL_UNREST";
        /** @description An orbital is another waypoint that orbits a parent waypoint. */
        WaypointOrbital: {
            /** @description The symbol of the orbiting waypoint. */
            symbol: string;
        };
        /** @description The symbol of the waypoint. */
        WaypointSymbol: string;
        WaypointTrait: {
            symbol: components["schemas"]["WaypointTraitSymbol"];
            /** @description The name of the trait. */
            name: string;
            /** @description A description of the trait. */
            description: string;
        };
        /**
         * @description The unique identifier of the trait.
         * @enum {string}
         */
        WaypointTraitSymbol: "UNCHARTED" | "UNDER_CONSTRUCTION" | "MARKETPLACE" | "SHIPYARD" | "OUTPOST" | "SCATTERED_SETTLEMENTS" | "SPRAWLING_CITIES" | "MEGA_STRUCTURES" | "PIRATE_BASE" | "OVERCROWDED" | "HIGH_TECH" | "CORRUPT" | "BUREAUCRATIC" | "TRADING_HUB" | "INDUSTRIAL" | "BLACK_MARKET" | "RESEARCH_FACILITY" | "MILITARY_BASE" | "SURVEILLANCE_OUTPOST" | "EXPLORATION_OUTPOST" | "MINERAL_DEPOSITS" | "COMMON_METAL_DEPOSITS" | "PRECIOUS_METAL_DEPOSITS" | "RARE_METAL_DEPOSITS" | "METHANE_POOLS" | "ICE_CRYSTALS" | "EXPLOSIVE_GASES" | "STRONG_MAGNETOSPHERE" | "VIBRANT_AURORAS" | "SALT_FLATS" | "CANYONS" | "PERPETUAL_DAYLIGHT" | "PERPETUAL_OVERCAST" | "DRY_SEABEDS" | "MAGMA_SEAS" | "SUPERVOLCANOES" | "ASH_CLOUDS" | "VAST_RUINS" | "MUTATED_FLORA" | "TERRAFORMED" | "EXTREME_TEMPERATURES" | "EXTREME_PRESSURE" | "DIVERSE_LIFE" | "SCARCE_LIFE" | "FOSSILS" | "WEAK_GRAVITY" | "STRONG_GRAVITY" | "CRUSHING_GRAVITY" | "TOXIC_ATMOSPHERE" | "CORROSIVE_ATMOSPHERE" | "BREATHABLE_ATMOSPHERE" | "THIN_ATMOSPHERE" | "JOVIAN" | "ROCKY" | "VOLCANIC" | "FROZEN" | "SWAMP" | "BARREN" | "TEMPERATE" | "JUNGLE" | "OCEAN" | "RADIOACTIVE" | "MICRO_GRAVITY_ANOMALIES" | "DEBRIS_CLUSTER" | "DEEP_CRATERS" | "SHALLOW_CRATERS" | "UNSTABLE_COMPOSITION" | "HOLLOWED_INTERIOR" | "STRIPPED";
        /**
         * @description The type of waypoint.
         * @enum {string}
         */
        WaypointType: "PLANET" | "GAS_GIANT" | "MOON" | "ORBITAL_STATION" | "JUMP_GATE" | "ASTEROID_FIELD" | "ASTEROID" | "ENGINEERED_ASTEROID" | "ASTEROID_BASE" | "NEBULA" | "DEBRIS_FIELD" | "GRAVITY_WELL" | "ARTIFICIAL_GRAVITY_WELL" | "FUEL_STATION";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "get-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Fetched status successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The current status of the game server. */
                        status: string;
                        /** @description The current version of the API. */
                        version: string;
                        /** @description The date when the game server was last reset. */
                        resetDate: string;
                        description: string;
                        stats: {
                            /** @description Number of registered agents in the game. */
                            agents: number;
                            /** @description Total number of ships in the game. */
                            ships: number;
                            /** @description Total number of systems in the game. */
                            systems: number;
                            /** @description Total number of waypoints in the game. */
                            waypoints: number;
                        };
                        leaderboards: {
                            /** @description Top agents with the most credits. */
                            mostCredits: {
                                /** @description Symbol of the agent. */
                                agentSymbol: string;
                                /**
                                 * Format: int64
                                 * @description Amount of credits.
                                 */
                                credits: number;
                            }[];
                            /** @description Top agents with the most charted submitted. */
                            mostSubmittedCharts: {
                                /** @description Symbol of the agent. */
                                agentSymbol: string;
                                /** @description Amount of charts done by the agent. */
                                chartCount: number;
                            }[];
                        };
                        serverResets: {
                            /** @description The date and time when the game server will reset. */
                            next: string;
                            /** @description How often we intend to reset the game server. */
                            frequency: string;
                        };
                        announcements: {
                            title: string;
                            body: string;
                        }[];
                        links: {
                            name: string;
                            url: string;
                        }[];
                    };
                };
            };
        };
    };
    register: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    faction: components["schemas"]["FactionSymbol"];
                    /**
                     * @description Your desired agent symbol. This will be a unique name used to represent your agent, and will be the prefix for your ships.
                     * @example BADGER
                     */
                    symbol: string;
                    /** @description Your email address. This is used if you reserved your call sign between resets. */
                    email?: string;
                };
            };
        };
        responses: {
            /** @description Succesfully registered. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            agent: components["schemas"]["Agent"];
                            contract: components["schemas"]["Contract"];
                            faction: components["schemas"]["Faction"];
                            ship: components["schemas"]["Ship"];
                            /** @description A Bearer token for accessing secured API endpoints. */
                            token: string;
                        };
                    };
                };
            };
        };
    };
    "get-systems": {
        parameters: {
            query?: {
                /** @description What entry offset to request */
                page?: number;
                /** @description How many entries to return per page */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully listed systems. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["System"][];
                        meta: components["schemas"]["Meta"];
                    };
                };
            };
        };
    };
    "get-system": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched the system. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["System"];
                    };
                };
            };
        };
    };
    "get-system-waypoints": {
        parameters: {
            query?: {
                /** @description What entry offset to request */
                page?: number;
                /** @description How many entries to return per page */
                limit?: number;
                /** @description Filter waypoints by type. */
                type?: components["schemas"]["WaypointType"];
                /** @description Filter waypoints by one or more traits. */
                traits?: components["schemas"]["WaypointTraitSymbol"] | components["schemas"]["WaypointTraitSymbol"][];
            };
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched all waypoints in the system. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Waypoint"][];
                        meta: components["schemas"]["Meta"];
                    };
                };
            };
        };
    };
    "get-waypoint": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched waypoint. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Waypoint"];
                    };
                };
            };
        };
    };
    "get-market": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched the market. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Market"];
                    };
                };
            };
        };
    };
    "get-shipyard": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched the shipyard. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Shipyard"];
                    };
                };
            };
        };
    };
    "get-jump-gate": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched jump gate. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["JumpGate"];
                    };
                };
            };
        };
    };
    "get-construction": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched construction site. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Construction"];
                    };
                };
            };
        };
    };
    "supply-construction": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The system symbol */
                systemSymbol: string;
                /** @description The waypoint symbol */
                waypointSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Symbol of the ship to use. */
                    shipSymbol: string;
                    /** @description The symbol of the good to supply. */
                    tradeSymbol: string;
                    /** @description Amount of units to supply. */
                    units: number;
                };
            };
        };
        responses: {
            /** @description Successfully supplied construction site. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            construction: components["schemas"]["Construction"];
                            cargo: components["schemas"]["ShipCargo"];
                        };
                    };
                };
            };
        };
    };
    "get-factions": {
        parameters: {
            query?: {
                /** @description What entry offset to request */
                page?: number;
                /** @description How many entries to return per page */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Succesfully fetched factions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Faction"][];
                        meta: components["schemas"]["Meta"];
                    };
                };
            };
        };
    };
    "get-faction": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The faction symbol */
                factionSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched a faction. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Faction"];
                    };
                };
            };
        };
    };
    "get-my-agent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched agent details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Agent"];
                    };
                };
            };
        };
    };
    "get-agents": {
        parameters: {
            query?: {
                /** @description What entry offset to request */
                page?: number;
                /** @description How many entries to return per page */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched agents details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Agent"][];
                        meta: components["schemas"]["Meta"];
                    };
                };
            };
        };
    };
    "get-agent": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The agent symbol */
                agentSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched agent details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Agent"];
                    };
                };
            };
        };
    };
    "get-contracts": {
        parameters: {
            query?: {
                /** @description What entry offset to request */
                page?: number;
                /** @description How many entries to return per page */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Succesfully listed contracts. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Contract"][];
                        meta: components["schemas"]["Meta"];
                    };
                };
            };
        };
    };
    "get-contract": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The contract ID */
                contractId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched contract. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Contract"];
                    };
                };
            };
        };
    };
    "accept-contract": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The contract ID to accept. */
                contractId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Succesfully accepted contract. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            agent: components["schemas"]["Agent"];
                            contract: components["schemas"]["Contract"];
                        };
                    };
                };
            };
        };
    };
    "deliver-contract": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the contract. */
                contractId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Symbol of a ship located in the destination to deliver a contract and that has a good to deliver in its cargo. */
                    shipSymbol: string;
                    /** @description The symbol of the good to deliver. */
                    tradeSymbol: string;
                    /** @description Amount of units to deliver. */
                    units: number;
                };
            };
        };
        responses: {
            /** @description Successfully delivered cargo to contract. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            contract: components["schemas"]["Contract"];
                            cargo: components["schemas"]["ShipCargo"];
                        };
                    };
                };
            };
        };
    };
    "fulfill-contract": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the contract to fulfill. */
                contractId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fulfilled a contract. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            agent: components["schemas"]["Agent"];
                            contract: components["schemas"]["Contract"];
                        };
                    };
                };
            };
        };
    };
    "get-my-ships": {
        parameters: {
            query?: {
                /** @description What entry offset to request */
                page?: number;
                /** @description How many entries to return per page */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Succesfully listed ships. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Ship"][];
                        meta: components["schemas"]["Meta"];
                    };
                };
            };
        };
    };
    "purchase-ship": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    shipType: components["schemas"]["ShipType"];
                    /** @description The symbol of the waypoint you want to purchase the ship at. */
                    waypointSymbol: string;
                };
            };
        };
        responses: {
            /** @description Purchased ship successfully. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            agent: components["schemas"]["Agent"];
                            ship: components["schemas"]["Ship"];
                            transaction: components["schemas"]["ShipyardTransaction"];
                        };
                    };
                };
            };
        };
    };
    "get-my-ship": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched ship. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Ship"];
                    };
                };
            };
        };
    };
    "get-my-ship-cargo": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched ship's cargo. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShipCargo"];
                    };
                };
            };
        };
    };
    "orbit-ship": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The ship has successfully moved into orbit at its current location. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            nav: components["schemas"]["ShipNav"];
                        };
                    };
                };
            };
        };
    };
    "ship-refine": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description The type of good to produce out of the refining process.
                     * @enum {string}
                     */
                    produce: "IRON" | "COPPER" | "SILVER" | "GOLD" | "ALUMINUM" | "PLATINUM" | "URANITE" | "MERITIUM" | "FUEL";
                };
            };
        };
        responses: {
            /** @description The ship has successfully refined goods. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cargo: components["schemas"]["ShipCargo"];
                            cooldown: components["schemas"]["Cooldown"];
                            /** @description Goods that were produced by this refining process. */
                            produced: {
                                /** @description Symbol of the good. */
                                tradeSymbol: string;
                                /** @description Amount of units of the good. */
                                units: number;
                            }[];
                            /** @description Goods that were consumed during this refining process. */
                            consumed: {
                                /** @description Symbol of the good. */
                                tradeSymbol: string;
                                /** @description Amount of units of the good. */
                                units: number;
                            }[];
                        };
                    };
                };
            };
        };
    };
    "create-chart": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            chart: components["schemas"]["Chart"];
                            waypoint: components["schemas"]["Waypoint"];
                        };
                    };
                };
            };
        };
    };
    "get-ship-cooldown": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Succesfully fetched ship's cooldown. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Cooldown"];
                    };
                };
            };
            /** @description No cooldown. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "dock-ship": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The ship has successfully docked at its current location. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            nav: components["schemas"]["ShipNav"];
                        };
                    };
                };
            };
        };
    };
    "create-survey": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The symbol of the ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Surveys has been created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cooldown: components["schemas"]["Cooldown"];
                            /** @description Surveys created by this action. */
                            surveys: components["schemas"]["Survey"][];
                        };
                    };
                };
            };
        };
    };
    "extract-resources": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @deprecated */
                    survey?: components["schemas"]["Survey"];
                };
            };
        };
        responses: {
            /** @description Extracted successfully. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cooldown: components["schemas"]["Cooldown"];
                            extraction: components["schemas"]["Extraction"];
                            cargo: components["schemas"]["ShipCargo"];
                        };
                    };
                };
            };
        };
    };
    "siphon-resources": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Siphon successful. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cooldown: components["schemas"]["Cooldown"];
                            siphon: components["schemas"]["Siphon"];
                            cargo: components["schemas"]["ShipCargo"];
                        };
                    };
                };
            };
        };
    };
    "extract-resources-with-survey": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Survey"];
            };
        };
        responses: {
            /** @description Extracted successfully. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cooldown: components["schemas"]["Cooldown"];
                            extraction: components["schemas"]["Extraction"];
                            cargo: components["schemas"]["ShipCargo"];
                        };
                    };
                };
            };
        };
    };
    jettison: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    symbol: components["schemas"]["TradeSymbol"];
                    /** @description Amount of units to jettison of this good. */
                    units: number;
                };
            };
        };
        responses: {
            /** @description Jettison successful. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cargo: components["schemas"]["ShipCargo"];
                        };
                    };
                };
            };
        };
    };
    "jump-ship": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The symbol of the waypoint to jump to. The destination must be a connected waypoint. */
                    waypointSymbol: string;
                };
            };
        };
        responses: {
            /** @description Jump successful. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            nav: components["schemas"]["ShipNav"];
                            cooldown: components["schemas"]["Cooldown"];
                            transaction: components["schemas"]["MarketTransaction"];
                            agent: components["schemas"]["Agent"];
                        };
                    };
                };
            };
        };
    };
    "navigate-ship": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The target destination. */
                    waypointSymbol: string;
                };
            };
        };
        responses: {
            /** @description The successful transit information including the route details and changes to ship fuel. The route includes the expected time of arrival. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            fuel: components["schemas"]["ShipFuel"];
                            nav: components["schemas"]["ShipNav"];
                        };
                    };
                };
            };
        };
    };
    "get-ship-nav": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The current nav status of the ship. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShipNav"];
                    };
                };
            };
        };
    };
    "patch-ship-nav": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    flightMode?: components["schemas"]["ShipNavFlightMode"];
                };
            };
        };
        responses: {
            /** @description The updated nav data of the ship. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShipNav"];
                    };
                };
            };
        };
    };
    "warp-ship": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The target destination. */
                    waypointSymbol: string;
                };
            };
        };
        responses: {
            /** @description The successful transit information including the route details and changes to ship fuel. The route includes the expected time of arrival. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            fuel: components["schemas"]["ShipFuel"];
                            nav: components["schemas"]["ShipNav"];
                        };
                    };
                };
            };
        };
    };
    "sell-cargo": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Symbol of a ship. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    symbol: components["schemas"]["TradeSymbol"];
                    /** @description Amounts of units to sell of the selected good. */
                    units: number;
                };
            };
        };
        responses: {
            /** @description Cargo was successfully sold. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            agent: components["schemas"]["Agent"];
                            cargo: components["schemas"]["ShipCargo"];
                            transaction: components["schemas"]["MarketTransaction"];
                        };
                    };
                };
            };
        };
    };
    "create-ship-system-scan": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully scanned for nearby systems. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cooldown: components["schemas"]["Cooldown"];
                            /** @description List of scanned systems. */
                            systems: components["schemas"]["ScannedSystem"][];
                        };
                    };
                };
            };
        };
    };
    "create-ship-waypoint-scan": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully scanned for nearby waypoints. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cooldown: components["schemas"]["Cooldown"];
                            /** @description List of scanned waypoints. */
                            waypoints: components["schemas"]["ScannedWaypoint"][];
                        };
                    };
                };
            };
        };
    };
    "create-ship-ship-scan": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully scanned for nearby ships. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cooldown: components["schemas"]["Cooldown"];
                            /** @description List of scanned ships. */
                            ships: components["schemas"]["ScannedShip"][];
                        };
                    };
                };
            };
        };
    };
    "refuel-ship": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description The amount of fuel to fill in the ship's tanks. When not specified, the ship will be refueled to its maximum fuel capacity. If the amount specified is greater than the ship's remaining capacity, the ship will only be refueled to its maximum fuel capacity. The amount specified is not in market units but in ship fuel units.
                     * @example 100
                     */
                    units?: number;
                    /**
                     * @description Wether to use the FUEL thats in your cargo or not. Default: false
                     * @example false
                     */
                    fromCargo?: boolean;
                };
            };
        };
        responses: {
            /** @description Refueled successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            agent: components["schemas"]["Agent"];
                            fuel: components["schemas"]["ShipFuel"];
                            transaction: components["schemas"]["MarketTransaction"];
                        };
                    };
                };
            };
        };
    };
    "purchase-cargo": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    symbol: components["schemas"]["TradeSymbol"];
                    /** @description Amounts of units to purchase. */
                    units: number;
                };
            };
        };
        responses: {
            /** @description Purchased goods successfully. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            agent: components["schemas"]["Agent"];
                            cargo: components["schemas"]["ShipCargo"];
                            transaction: components["schemas"]["MarketTransaction"];
                        };
                    };
                };
            };
        };
    };
    "transfer-cargo": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The transferring ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    tradeSymbol: components["schemas"]["TradeSymbol"];
                    /** @description Amount of units to transfer. */
                    units: number;
                    /** @description The symbol of the ship to transfer to. */
                    shipSymbol: string;
                };
            };
        };
        responses: {
            /** @description Transfer successful. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            cargo: components["schemas"]["ShipCargo"];
                        };
                    };
                };
            };
        };
    };
    negotiateContract: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully negotiated a new contract. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            contract: components["schemas"]["Contract"];
                        };
                    };
                };
            };
        };
    };
    "get-mounts": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Got installed mounts. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShipMount"][];
                    };
                };
            };
        };
    };
    "install-mount": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    symbol: string;
                };
            };
        };
        responses: {
            /** @description Successfully installed the mount. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            agent: components["schemas"]["Agent"];
                            /** @description List of installed mounts after the installation of the new mount. */
                            mounts: components["schemas"]["ShipMount"][];
                            cargo: components["schemas"]["ShipCargo"];
                            transaction: components["schemas"]["ShipModificationTransaction"];
                        };
                    };
                };
            };
        };
    };
    "remove-mount": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ship's symbol. */
                shipSymbol: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The symbol of the mount to remove. */
                    symbol: string;
                };
            };
        };
        responses: {
            /** @description Successfully removed the mount. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            agent: components["schemas"]["Agent"];
                            /** @description List of installed mounts after the removal of the selected mount. */
                            mounts: components["schemas"]["ShipMount"][];
                            cargo: components["schemas"]["ShipCargo"];
                            transaction: components["schemas"]["ShipModificationTransaction"];
                        };
                    };
                };
            };
        };
    };
}
