-- CreateIndex
CREATE INDEX `buyer_event_index` ON `buyer_events`(`buyer_id`, `event_type`);

-- CreateIndex
CREATE INDEX `buyer_index` ON `buyers`(`name`, `lastname`, `type_id`);

-- CreateIndex
CREATE INDEX `product_index` ON `products`(`name`, `description`, `price`, `quantity`);

-- CreateIndex
CREATE INDEX `transaction_index` ON `transactions`(`product_id`, `buyer_id`);
