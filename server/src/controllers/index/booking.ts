/** @format */

import { Request, Response } from 'express';

import { createOne } from '../../models/booking';
import { updateOne } from '../../models/instance';

const create = async (req: Request, res: Response) => {
	try {
		let booking = await createOne(req.body);
		await updateOne(
			{ _id: req.body.instance },
			{ $push: { bookings: { $each: req.body.seats } } }
		);
		return res.json({
			message: 'booking has been confirmed',
			success: true,
			data: booking,
		});
	} catch (err) {
		return res.json({
			message: 'an error has occured',
			success: false,
			data: null,
		});
	}
};

export default {
	create,
};
