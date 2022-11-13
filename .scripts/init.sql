CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE graphs (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_front_uuid VARCHAR NOT NULL,
    waveform real[],
    sampling_freq INTEGER,
    emotions VARCHAR[],
    filename VARCHAR
);
