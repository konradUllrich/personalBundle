import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCSCHEDSTATISTICSAttributes {
    STRGUID: string;
    TSLASTRUN?: Date;
    TSLASTGOODRUN?: Date;
    STRTIMEZONE?: string;
}

@Table({
	tableName: "LCSCHEDSTATISTICS",
	timestamps: false 
})
export class LCSCHEDSTATISTICS extends Model<LCSCHEDSTATISTICSAttributes, LCSCHEDSTATISTICSAttributes> implements LCSCHEDSTATISTICSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	TSLASTRUN?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	TSLASTGOODRUN?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	STRTIMEZONE?: string;

}