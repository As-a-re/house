-- Insert sample users
INSERT INTO users (id, email, first_name, last_name, phone, user_type, verified) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'kwame.asante@example.com', 'Kwame', 'Asante', '+233241234567', 'agent', true),
('550e8400-e29b-41d4-a716-446655440002', 'ama.osei@example.com', 'Ama', 'Osei', '+233241234568', 'agent', true),
('550e8400-e29b-41d4-a716-446655440003', 'john.doe@example.com', 'John', 'Doe', '+233241234569', 'renter', true),
('550e8400-e29b-41d4-a716-446655440004', 'jane.smith@example.com', 'Jane', 'Smith', '+233241234570', 'renter', true);

-- Insert sample agents
INSERT INTO agents (id, user_id, license_number, agency_name, bio, verification_status) VALUES
('660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'RE-2024-001234', 'Asante Properties', 'Experienced real estate agent specializing in Accra properties', 'verified'),
('660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', 'RE-2024-001235', 'Osei Realty', 'Helping families find their perfect homes across Ghana', 'verified');

-- Insert sample properties
INSERT INTO properties (id, agent_id, title, description, price, property_type, bedrooms, bathrooms, area_sqm, location, latitude, longitude, status) VALUES
('770e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', 'Modern 2-Bedroom Apartment in East Legon', 'Beautiful modern apartment with contemporary finishes, located in the heart of East Legon. Features include fitted kitchen, spacious living area, and secure parking.', 1200.00, 'apartment', 2, 2, 85, 'East Legon, Accra', 5.6037, -0.1870, 'active'),
('770e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440002', 'Affordable 3-Bedroom House in Tema', 'Perfect family home in a quiet neighborhood of Tema. Features include large compound, modern kitchen, and proximity to schools and shopping centers.', 800.00, 'house', 3, 2, 120, 'Tema, Greater Accra', 5.6698, -0.0166, 'active'),
('770e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440001', 'Shared Accommodation in Kumasi', 'Comfortable shared space perfect for students and young professionals. Includes shared kitchen, living area, and high-speed internet.', 300.00, 'shared', 1, 1, 40, 'Kumasi, Ashanti Region', 6.6885, -1.6244, 'active'),
('770e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440002', 'Housing Cooperative in Takoradi', 'Community-owned housing with shared facilities including gym, playground, and community center. Great for families looking for affordable housing.', 600.00, 'cooperative', 2, 1, 75, 'Takoradi, Western Region', 4.8845, -1.7554, 'active');

-- Insert sample property images
INSERT INTO property_images (property_id, image_url, is_primary) VALUES
('770e8400-e29b-41d4-a716-446655440001', '/placeholder.svg?height=400&width=600', true),
('770e8400-e29b-41d4-a716-446655440001', '/placeholder.svg?height=400&width=600', false),
('770e8400-e29b-41d4-a716-446655440002', '/placeholder.svg?height=400&width=600', true),
('770e8400-e29b-41d4-a716-446655440002', '/placeholder.svg?height=400&width=600', false),
('770e8400-e29b-41d4-a716-446655440003', '/placeholder.svg?height=400&width=600', true),
('770e8400-e29b-41d4-a716-446655440004', '/placeholder.svg?height=400&width=600', true);

-- Insert sample amenities
INSERT INTO property_amenities (property_id, amenity) VALUES
('770e8400-e29b-41d4-a716-446655440001', 'Air Conditioning'),
('770e8400-e29b-41d4-a716-446655440001', 'Parking'),
('770e8400-e29b-41d4-a716-446655440001', 'Security'),
('770e8400-e29b-41d4-a716-446655440002', 'Garden'),
('770e8400-e29b-41d4-a716-446655440002', 'Parking'),
('770e8400-e29b-41d4-a716-446655440003', 'WiFi'),
('770e8400-e29b-41d4-a716-446655440003', 'Shared Kitchen'),
('770e8400-e29b-41d4-a716-446655440004', 'Gym'),
('770e8400-e29b-41d4-a716-446655440004', 'Playground'),
('770e8400-e29b-41d4-a716-446655440004', 'Community Center');

-- Insert sample saved properties
INSERT INTO saved_properties (user_id, property_id) VALUES
('550e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440001'),
('550e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440002'),
('550e8400-e29b-41d4-a716-446655440004', '770e8400-e29b-41d4-a716-446655440001');

-- Insert sample messages
INSERT INTO messages (sender_id, recipient_id, property_id, message) VALUES
('550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', 'Hi, I am interested in viewing this apartment. When would be a good time?'),
('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440001', 'Hello! Thank you for your interest. The property is still available. Would you like to schedule a viewing for this weekend?');

-- Insert sample property inquiries
INSERT INTO property_inquiries (property_id, user_id, message, contact_phone, inquiry_type) VALUES
('770e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440003', 'I would like to know more about the lease terms and move-in requirements.', '+233241234569', 'lease_inquiry'),
('770e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440004', 'Is this property still available? I am looking for a family home in Tema.', '+233241234570', 'availability');
