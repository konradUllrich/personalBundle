import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPCHILDCONTROLTITLEAttributes {
    STRCHILDCONTROLGUID: string;
    STRLANG: string;
    STRITEM?: string;
}

@Table({
	tableName: "LCAPPCHILDCONTROLTITLE",
	timestamps: false 
})
export class LCAPPCHILDCONTROLTITLE extends Model<LCAPPCHILDCONTROLTITLEAttributes, LCAPPCHILDCONTROLTITLEAttributes> implements LCAPPCHILDCONTROLTITLEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRCHILDCONTROLGUID!: string;

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