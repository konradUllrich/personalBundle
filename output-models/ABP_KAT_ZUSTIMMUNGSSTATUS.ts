import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABP_KAT_ZUSTIMMUNGSSTATUSAttributes {
    STR_SORTIERUNG?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    STR_ZUSTIMMUNGSSTATUS?: string;
    DTINSERT?: Date;
    STR_ID?: string;
    STRID: string;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "ABP_KAT_ZUSTIMMUNGSSTATUS",
	timestamps: false 
})
export class ABP_KAT_ZUSTIMMUNGSSTATUS extends Model<ABP_KAT_ZUSTIMMUNGSSTATUSAttributes, ABP_KAT_ZUSTIMMUNGSSTATUSAttributes> implements ABP_KAT_ZUSTIMMUNGSSTATUSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZUSTIMMUNGSSTATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}