import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_KAT_ERFASSUNGSSTATUSAttributes {
    LUSERIDINSERT?: number;
    STR_ID?: string;
    DTINSERT?: Date;
    STR_SORTIERUNG?: string;
    DTEDIT?: Date;
    LUSERID?: number;
    STR_ERFASSUNGSSTATUS?: string;
    STRID: string;
}

@Table({
	tableName: "ZE_KAT_ERFASSUNGSSTATUS",
	timestamps: false 
})
export class ZE_KAT_ERFASSUNGSSTATUS extends Model<ZE_KAT_ERFASSUNGSSTATUSAttributes, ZE_KAT_ERFASSUNGSSTATUSAttributes> implements ZE_KAT_ERFASSUNGSSTATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ERFASSUNGSSTATUS?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}