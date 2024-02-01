import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPCONTROLTITLEAttributes {
    STRCONTROLGUID: string;
    STRLANG: string;
    STRITEM?: string;
}

@Table({
	tableName: "LCAPPCONTROLTITLE",
	timestamps: false 
})
export class LCAPPCONTROLTITLE extends Model<LCAPPCONTROLTITLEAttributes, LCAPPCONTROLTITLEAttributes> implements LCAPPCONTROLTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRCONTROLGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(16) 
    })
    	STRLANG!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRITEM?: string;

}