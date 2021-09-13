/** @format */

import { Request, Response } from 'express';

import { createOne } from '../../models/booking';
import { updateOne } from '../../models/instance';

import { emailRegex, phoneRegex } from '../../utils/regex';

const create = async (req: Request, res: Response) => {
	if (!req.body.email || !emailRegex.test(req.body.email))
		return res.json({
			message: 'invalid email',
			success: false,
			data: null,
		});

	if (!req.body.phone || !phoneRegex.test(req.body.phone))
		return res.json({
			message: 'invalid phone number',
			success: false,
			data: null,
		});

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
