import { PubSub, SubscriptionOptions } from "@google-cloud/pubsub";
import { UserService } from "../services/user-service";

export interface UserUpdatesListenerOptions {
  userService: UserService;
  pubSub: PubSub;
}

interface UserUpdatesMessage {
  uid: string;
  email: string;
}

export class UserUpdatesListener {
  private userService: UserService;
  private pubSub: PubSub;
  subscriberName = "events-sub";

  constructor(options: UserUpdatesListenerOptions) {
    this.userService = options.userService;
    this.pubSub = options.pubSub;
  }

  listen(options?: SubscriptionOptions) {
    const subscription = this.pubSub.subscription(this.subscriberName, options);

    subscription.on("message", (msg) => {
      console.log(`${this.subscriberName} received a message: ${msg}`);
    });
  }
}