import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XPOLL353CDE18Attributes {
    L_ORDER?: number;
    B_APPOINTMENT?: boolean;
    LID: number;
    B_ADD_OPTIONS?: boolean;
    LUSERINSERT?: number;
    B_MULTIPLE_SELECTION?: boolean;
    L_FILEINFORMATION?: number;
    DTINSERT?: Date;
    LUSERID?: number;
    DT_START?: Date;
    REFDATAFIELD51B21AE8?: number;
    TXT_QUESTION?: string;
    B_SHAREGROUP?: boolean;
    B_INVITATIONS?: boolean;
    B_EDITANONYMOUS?: boolean;
    B_SHARE_EVENT?: boolean;
    L_RELEASE?: number;
    B_URGENT?: boolean;
    B_SHARE?: boolean;
    B_ARCHIVED?: boolean;
    L_CHART?: number;
    L_SET?: number;
    STR_SHARE_GROUP?: string;
    REF_3EFA5F16?: number;
    STR_TITLE?: string;
    TXT_DISTRIBUTOR?: string;
    B_RELEASE?: boolean;
    DT_END?: Date;
    B_IMPORTANT?: boolean;
    DTEDIT?: Date;
    B_DISTRIBUTOR?: boolean;
}

@Table({
	tableName: "XPOLL353CDE18",
	timestamps: false 
})
export class XPOLL353CDE18 extends Model<XPOLL353CDE18Attributes, XPOLL353CDE18Attributes> implements XPOLL353CDE18Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_APPOINTMENT?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ADD_OPTIONS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MULTIPLE_SELECTION?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_START?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REFDATAFIELD51B21AE8?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_QUESTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHAREGROUP?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_INVITATIONS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EDITANONYMOUS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHARE_EVENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_RELEASE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_URGENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHARE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ARCHIVED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_CHART?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SET?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SHARE_GROUP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_3EFA5F16?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DISTRIBUTOR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_RELEASE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_END?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IMPORTANT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DISTRIBUTOR?: boolean;

}