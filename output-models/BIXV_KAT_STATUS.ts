import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_KAT_STATUSAttributes {
    LUSERIDINSERT?: number;
    STRID: string;
    DTEDIT?: Date;
    STR_SORTIERUNG?: string;
    STR_ID?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    STR_STATUS?: string;
}

@Table({
	tableName: "BIXV_KAT_STATUS",
	timestamps: false 
})
export class BIXV_KAT_STATUS extends Model<BIXV_KAT_STATUSAttributes, BIXV_KAT_STATUSAttributes> implements BIXV_KAT_STATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

}