import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSATTRIBUTETITLEAttributes {
    STRATTRIBUTEGUID: string;
    STRLANG: string;
    STRNAME?: string;
}

@Table({
	tableName: "DSATTRIBUTETITLE",
	timestamps: false 
})
export class DSATTRIBUTETITLE extends Model<DSATTRIBUTETITLEAttributes, DSATTRIBUTETITLEAttributes> implements DSATTRIBUTETITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRATTRIBUTEGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(16) 
    })
    	STRLANG!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(80) 
    })
    	STRNAME?: string;

}