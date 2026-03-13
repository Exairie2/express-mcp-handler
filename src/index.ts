/**
 * Express MCP Handler
 * 
 * A utility for integrating Model Context Protocol (MCP) into Express applications
 * with both stateful and stateless modes.
 */

// Export the stateful handler
import { statefulHandlers } from './stateful.js';

// Export the stateless handler
import { statelessHandler } from './stateless.js';

// Export the SSE handler
import { sseHandlers } from './sse.js';

export {
  statefulHandlers,
statelessHandler,
sseHandlers
}

// Export types
export type {
  StatefulHandlerOptions,
  StatelessHandlerOptions,
  SSEHandlerOptions,
  ServerFactory
} from './types.js'; 